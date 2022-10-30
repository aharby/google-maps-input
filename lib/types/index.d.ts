import { DiffComponent, DiffComponentOptions, ObjectDiff, ObjectSchemaType, ObjectInputProps, ArrayDiff, DiffProps } from "sanity";
declare global {
    interface Window {
        gm_authFailure: any;
        ___sanity_googleMapsApiCallback: any;
    }
}
export interface LatLng {
    lat: number;
    lng: number;
}
export interface Geopoint {
    _type: 'geopoint';
    _key?: string;
    lat: number;
    lng: number;
    alt?: number;
    formatted_address: string;
    address_components: google.maps.GeocoderAddressComponent[];
}
export interface GeopointSchemaType extends ObjectSchemaType {
    diffComponent?: DiffComponent<ObjectDiff<Geopoint>> | DiffComponentOptions<ObjectDiff<Geopoint>>;
}
export type GeopointInputProps = ObjectInputProps<Geopoint, GeopointSchemaType> & {
    geoConfig: GoogleMapsInputConfig;
};
export default GeopointInput;
export type GeopointArrayDiffProps = DiffProps<ArrayDiff<Geopoint>>;
export const GeopointArrayDiff: DiffComponent<ArrayDiff<Geopoint>>;
export type GeopointFieldDiffProps = DiffProps<ObjectDiff<Geopoint>>;
export const GeopointFieldDiff: DiffComponent<ObjectDiff<Geopoint>>;
export interface GoogleMapsInputConfig {
    apiKey: string;
    defaultZoom?: number;
    defaultLocale?: string;
    defaultLocation?: {
        lat: number;
        lng: number;
    };
}
export const googleMapsInput: import("sanity").Plugin<GoogleMapsInputConfig>;

//# sourceMappingURL=index.d.ts.map
