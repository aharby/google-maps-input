import React from 'react'
import {SearchInput} from '../map/SearchInput'
import {GoogleMap} from '../map/Map'
import {Marker} from '../map/Marker'
import {LatLng, Geopoint} from '../types'

const fallbackLatLng: LatLng = {lat: 40.7058254, lng: -74.1180863}

interface SelectProps {
  api: typeof window.google.maps
  value?: Geopoint
  onChange?: (latLng: google.maps.LatLng, formatted_address: string, address_components:google.maps.GeocoderAddressComponent[]) => void
  defaultLocation?: LatLng
  defaultZoom?: number
}

export class GeopointSelect extends React.PureComponent<SelectProps> {
  static defaultProps = {
    defaultZoom: 8,
    defaultLocation: {lng: 10.74609, lat: 59.91273},
  }

  mapRef = React.createRef<HTMLDivElement>()

  getCenter() {
    const {value = {}, defaultLocation = {}} = this.props
    const point: LatLng = {...fallbackLatLng, ...defaultLocation, ...value}
    return point
  }

  handlePlaceChanged = (place: google.maps.places.PlaceResult) => {
    if (!place.geometry?.location || !place.formatted_address || !place.address_components) {
      return
    }
    this.setValue(place.geometry.location,place.formatted_address, place.address_components)
  }

  setValue(geoPoint: google.maps.LatLng, formatted_address: string, address_components: google.maps.GeocoderAddressComponent[]) {
    if (this.props.onChange) {
      this.props.onChange(geoPoint, formatted_address,address_components)
    }
  }

  render() {
    const {api, defaultZoom, value} = this.props
    return (
      <GoogleMap
        api={api}
        location={this.getCenter()}
        defaultZoom={defaultZoom}
      >
        {(map) => (
          <>
            <SearchInput api={api} map={map} onChange={this.handlePlaceChanged} />
            {value && (
              <Marker
                api={api}
                map={map}
                position={value}
              />
            )}
          </>
        )}
      </GoogleMap>
    )
  }
}
