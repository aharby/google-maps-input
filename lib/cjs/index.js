var $dyHF6$reactjsxruntime = require("react/jsx-runtime");
var $dyHF6$react = require("react");
var $dyHF6$sanity = require("sanity");
var $dyHF6$lodash = require("lodash");
var $dyHF6$sanityui = require("@sanity/ui");
var $dyHF6$sanityicons = require("@sanity/icons");
var $dyHF6$rxjs = require("rxjs");
var $dyHF6$styledcomponents = require("styled-components");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "googleMapsInput", () => $329a1cedcedb1349$export$626ae7d0cf8f9143);
$parcel$export(module.exports, "GeopointArrayDiff", () => $5245dd3554e263be$export$2d0695678527b4cc);
$parcel$export(module.exports, "GeopointFieldDiff", () => $59d44c8f30c12966$export$6b7bf6aeccd8ac3f);
$parcel$export(module.exports, "GeopointInput", () => $6c4d418093d85b71$export$2e2bcd8739ae039);












const $f83c917b838af6fc$var$callbackName = "___sanity_googleMapsApiCallback";
const $f83c917b838af6fc$var$authFailureCallbackName = "gm_authFailure";
const $f83c917b838af6fc$var$locale = typeof window !== "undefined" && window.navigator.language || "en";
let $f83c917b838af6fc$var$subject;
function $f83c917b838af6fc$export$616f2ff2d07a5991(config) {
    const selectedLocale = config.defaultLocale || $f83c917b838af6fc$var$locale || "en-US";
    if ($f83c917b838af6fc$var$subject) return $f83c917b838af6fc$var$subject;
    $f83c917b838af6fc$var$subject = new (0, $dyHF6$rxjs.BehaviorSubject)({
        loadState: "loading"
    });
    window[$f83c917b838af6fc$var$authFailureCallbackName] = ()=>{
        delete window[$f83c917b838af6fc$var$authFailureCallbackName];
        $f83c917b838af6fc$var$subject.next({
            loadState: "authError"
        });
    };
    window[$f83c917b838af6fc$var$callbackName] = ()=>{
        delete window[$f83c917b838af6fc$var$callbackName];
        $f83c917b838af6fc$var$subject.next({
            loadState: "loaded",
            api: window.google.maps
        });
    };
    const script = document.createElement("script");
    script.onerror = (event, source, lineno, colno, error)=>$f83c917b838af6fc$var$subject.next({
            loadState: "loadError",
            error: $f83c917b838af6fc$var$coeerceError(event, error)
        });
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&libraries=places&callback=${$f83c917b838af6fc$var$callbackName}&language=${selectedLocale}`;
    document.getElementsByTagName("head")[0].appendChild(script);
    return $f83c917b838af6fc$var$subject;
}
function $f83c917b838af6fc$var$coeerceError(event, error) {
    if (error) return error;
    if (typeof event === "string") return new Error(event);
    return new Error($f83c917b838af6fc$var$isErrorEvent(event) ? event.message : "Failed to load Google Maps API");
}
function $f83c917b838af6fc$var$isErrorEvent(event) {
    if (typeof event !== "object" || event === null) return false;
    if (!("message" in event)) return false;
    return typeof event.message === "string";
}





function $53fff27a5374fe8c$export$58a097931cd8d64d(props) {
    return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)((0, $dyHF6$sanityui.Card), {
        tone: "critical",
        radius: 1,
        children: [
            /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Box), {
                as: "header",
                paddingX: 4,
                paddingTop: 4,
                paddingBottom: 1,
                children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Text), {
                    as: "h2",
                    weight: "bold",
                    children: "Google Maps failed to load"
                })
            }),
            /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Box), {
                paddingX: 4,
                paddingTop: 4,
                paddingBottom: 1,
                children: props.isAuthError ? /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)($53fff27a5374fe8c$var$AuthError, {}) : /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)((0, $dyHF6$reactjsxruntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Text), {
                            as: "h3",
                            children: "Error details:"
                        }),
                        /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("pre", {
                            children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Code), {
                                size: 1,
                                children: "error" in props && props.error?.message
                            })
                        })
                    ]
                })
            })
        ]
    });
}
function $53fff27a5374fe8c$var$AuthError() {
    return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)((0, $dyHF6$sanityui.Text), {
        children: [
            /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("p", {
                children: "The error appears to be related to authentication"
            }),
            /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("p", {
                children: "Common causes include:"
            }),
            /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("li", {
                        children: "Incorrect API key"
                    }),
                    /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("li", {
                        children: "Referer not allowed"
                    }),
                    /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("li", {
                        children: "Missing authentication scope"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("p", {
                children: "Check the browser developer tools for more information."
            })
        ]
    });
}


class $ffeb69a200895c22$export$a628545bcf173896 extends (0, ($parcel$interopDefault($dyHF6$react))).Component {
    constructor(props){
        super(props);
        this.state = {
            loadState: "loading"
        };
        let sync = true;
        this.loadSubscription = (0, $f83c917b838af6fc$export$616f2ff2d07a5991)(props.config).subscribe((loadState)=>{
            if (sync) this.state = loadState;
            else this.setState(loadState);
        });
        sync = false;
    }
    componentWillUnmount() {
        if (this.loadSubscription) this.loadSubscription.unsubscribe();
    }
    render() {
        switch(this.state.loadState){
            case "loadError":
                return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $53fff27a5374fe8c$export$58a097931cd8d64d), {
                    error: this.state.error,
                    isAuthError: false
                });
            case "authError":
                return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $53fff27a5374fe8c$export$58a097931cd8d64d), {
                    isAuthError: true
                });
            case "loading":
                return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("div", {
                    children: "Loading Google Maps API"
                });
            case "loaded":
                return this.props.children(this.state.api) || null;
            default:
                return null;
        }
    }
}








const $d1c3432f7dd52338$export$be3daefb18c346ac = (0, ($parcel$interopDefault($dyHF6$styledcomponents))).div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 220px;
`;


class $06ee1f282087006d$export$55d7609a8f1eccd2 extends $dyHF6$react.PureComponent {
    searchInputRef = /*#__PURE__*/ $dyHF6$react.createRef();
    handleChange = ()=>{
        if (!this.autoComplete) return;
        this.props.onChange(this.autoComplete.getPlace());
        if (this.searchInputRef.current) this.searchInputRef.current.value = "";
    };
    componentDidMount() {
        const input = this.searchInputRef.current;
        if (!input) return;
        const { api: api , map: map  } = this.props;
        const { Circle: Circle , places: places , event: event  } = api;
        const searchBounds = new Circle({
            center: map.getCenter(),
            radius: 100
        }).getBounds();
        this.autoComplete = new places.Autocomplete(input, {
            bounds: searchBounds,
            types: []
        });
        event.addListener(this.autoComplete, "place_changed", this.handleChange);
    }
    render() {
        return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $d1c3432f7dd52338$export$be3daefb18c346ac), {
            children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.TextInput), {
                name: "place",
                ref: this.searchInputRef,
                placeholder: "textSearch for place or address",
                padding: 4
            })
        });
    }
}




function $97ec7b8b370674b5$export$ad553d4d3a617f20(latLng1, latLng2) {
    const lat1 = typeof latLng1.lat === "function" ? latLng1.lat() : latLng1.lat;
    const lng1 = typeof latLng1.lng === "function" ? latLng1.lng() : latLng1.lng;
    const lat2 = typeof latLng2.lat === "function" ? latLng2.lat() : latLng2.lat;
    const lng2 = typeof latLng2.lng === "function" ? latLng2.lng() : latLng2.lng;
    return lat1 === lat2 && lng1 === lng2;
}



const $c49746d4a5875a1e$export$23f3dfd47374502b = (0, ($parcel$interopDefault($dyHF6$styledcomponents))).div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;


class $b4ba0a9d820dad94$export$4ad1bae46276c5ce extends (0, ($parcel$interopDefault($dyHF6$react))).PureComponent {
    static defaultProps = {
        defaultZoom: 8,
        scrollWheel: true
    };
    state = {
        map: undefined
    };
    mapRef = /*#__PURE__*/ (0, ($parcel$interopDefault($dyHF6$react))).createRef();
    mapEl = null;
    componentDidMount() {
        this.attachClickHandler();
    }
    attachClickHandler = ()=>{
        const map = this.state.map;
        if (!map) return;
        const { api: api , onClick: onClick  } = this.props;
        const { event: event  } = api;
        if (this.clickHandler) this.clickHandler.remove();
        if (onClick) this.clickHandler = event.addListener(map, "click", onClick);
    };
    componentDidUpdate(prevProps) {
        const map = this.state.map;
        if (!map) return;
        const { onClick: onClick , location: location , bounds: bounds  } = this.props;
        if (prevProps.onClick !== onClick) this.attachClickHandler();
        if (!(0, $97ec7b8b370674b5$export$ad553d4d3a617f20)(prevProps.location, location)) map.panTo(this.getCenter());
        if (bounds && (!prevProps.bounds || !bounds.equals(prevProps.bounds))) map.fitBounds(bounds);
    }
    componentWillUnmount() {
        if (this.clickHandler) this.clickHandler.remove();
    }
    getCenter() {
        const { location: location , api: api  } = this.props;
        return new api.LatLng(location.lat, location.lng);
    }
    constructMap(el) {
        const { defaultZoom: defaultZoom , api: api , mapTypeControl: mapTypeControl , controlSize: controlSize , bounds: bounds , scrollWheel: scrollWheel  } = this.props;
        const map = new api.Map(el, {
            zoom: defaultZoom,
            center: this.getCenter(),
            scrollwheel: scrollWheel,
            streetViewControl: false,
            mapTypeControl: mapTypeControl,
            controlSize: controlSize
        });
        if (bounds) map.fitBounds(bounds);
        return map;
    }
    setMapElement = (element)=>{
        if (element && element !== this.mapEl) {
            const map = this.constructMap(element);
            this.setState({
                map: map
            }, this.attachClickHandler);
        }
        this.mapEl = element;
    };
    render() {
        const { children: children  } = this.props;
        const { map: map  } = this.state;
        return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)((0, $dyHF6$reactjsxruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $c49746d4a5875a1e$export$23f3dfd47374502b), {
                    ref: this.setMapElement
                }),
                children && map ? children(map) : null
            ]
        });
    }
}




const $03ff3d51ebf52598$var$markerPath = "M 3.052 3.7 C 1.56 5.293 0.626 7.612 0.663 9.793 C 0.738 14.352 2.793 16.077 6.078 22.351 C 7.263 25.111 8.497 28.032 9.672 32.871 C 9.835 33.584 9.994 34.246 10.069 34.305 C 10.143 34.362 10.301 33.697 10.465 32.983 C 11.639 28.145 12.875 25.226 14.059 22.466 C 17.344 16.192 19.398 14.466 19.474 9.908 C 19.511 7.727 18.574 5.405 17.083 3.814 C 15.379 1.994 12.809 0.649 10.069 0.593 C 7.328 0.536 4.756 1.882 3.052 3.7 Z";
class $03ff3d51ebf52598$export$e98856a975cab58e extends $dyHF6$react.PureComponent {
    eventHandlers = {};
    componentDidMount() {
        const { position: position , api: api , map: map , onMove: onMove , zIndex: zIndex , opacity: opacity , label: label , markerRef: markerRef , color: color  } = this.props;
        const { Marker: GMarker  } = api;
        let icon;
        if (color) icon = {
            path: $03ff3d51ebf52598$var$markerPath,
            fillOpacity: 1,
            fillColor: color.background,
            strokeColor: color.border,
            strokeWeight: 2,
            anchor: new api.Point(10, 35),
            labelOrigin: new api.Point(10, 11)
        };
        this.marker = new GMarker({
            draggable: Boolean(onMove),
            position: position,
            map: map,
            zIndex: zIndex,
            opacity: opacity,
            label: label,
            icon: icon
        });
        if (markerRef) markerRef.current = this.marker;
        this.attachMoveHandler();
        this.attachClickHandler();
    }
    componentDidUpdate(prevProps) {
        if (!this.marker) return;
        const { position: position , onMove: onMove , label: label , zIndex: zIndex , opacity: opacity , map: map  } = this.props;
        if (prevProps.onMove !== onMove) this.attachMoveHandler();
        if (!(0, $97ec7b8b370674b5$export$ad553d4d3a617f20)(prevProps.position, position)) this.marker.setPosition(position);
        if (prevProps.label !== label) this.marker.setLabel(label || null);
        if (prevProps.zIndex !== zIndex) this.marker.setZIndex(zIndex || null);
        if (prevProps.opacity !== opacity) this.marker.setOpacity(opacity || null);
        if (prevProps.map !== map) this.marker.setMap(map);
    }
    componentWillUnmount() {
        if (this.eventHandlers.move) this.eventHandlers.move.remove();
        if (this.marker) this.marker.setMap(null);
    }
    attachMoveHandler() {
        const { api: api , onMove: onMove  } = this.props;
        if (this.eventHandlers.move) this.eventHandlers.move.remove();
        if (this.marker && onMove) this.eventHandlers.move = api.event.addListener(this.marker, "dragend", onMove);
    }
    attachClickHandler() {
        const { api: api , onClick: onClick  } = this.props;
        if (this.eventHandlers.click) this.eventHandlers.click.remove();
        if (this.marker && onClick) this.eventHandlers.click = api.event.addListener(this.marker, "click", onClick);
    }
    // eslint-disable-next-line class-methods-use-this
    render() {
        return null;
    }
}


const $a24f16af03c18a4b$var$fallbackLatLng = {
    lat: 40.7058254,
    lng: -74.1180863
};
class $a24f16af03c18a4b$export$9a2476e65b6b92a7 extends (0, ($parcel$interopDefault($dyHF6$react))).PureComponent {
    static defaultProps = {
        defaultZoom: 8,
        defaultLocation: {
            lng: 10.74609,
            lat: 59.91273
        }
    };
    mapRef = /*#__PURE__*/ (0, ($parcel$interopDefault($dyHF6$react))).createRef();
    getCenter() {
        const { value: value = {} , defaultLocation: defaultLocation = {}  } = this.props;
        const point = {
            ...$a24f16af03c18a4b$var$fallbackLatLng,
            ...defaultLocation,
            ...value
        };
        return point;
    }
    handlePlaceChanged = (place)=>{
        if (!place.geometry?.location) return;
        this.setValue(place.geometry.location);
    };
    handleMarkerDragEnd = (event)=>{
        if (event.latLng) this.setValue(event.latLng);
    };
    handleMapClick = (event)=>{
        if (event.latLng) this.setValue(event.latLng);
    };
    setValue(geoPoint) {
        if (this.props.onChange) this.props.onChange(geoPoint);
    }
    render() {
        const { api: api , defaultZoom: defaultZoom , value: value , onChange: onChange  } = this.props;
        return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $b4ba0a9d820dad94$export$4ad1bae46276c5ce), {
            api: api,
            location: this.getCenter(),
            onClick: this.handleMapClick,
            defaultZoom: defaultZoom,
            children: (map)=>/*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)((0, $dyHF6$reactjsxruntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $06ee1f282087006d$export$55d7609a8f1eccd2), {
                            api: api,
                            map: map,
                            onChange: this.handlePlaceChanged
                        }),
                        value && /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $03ff3d51ebf52598$export$e98856a975cab58e), {
                            api: api,
                            map: map,
                            position: value,
                            onMove: onChange ? this.handleMarkerDragEnd : undefined
                        })
                    ]
                })
        });
    }
}



const $116268a9005e03a0$export$1c4ad7c095d42d37 = (0, ($parcel$interopDefault($dyHF6$styledcomponents))).img`
  width: 100%;
  height: auto;
  vertical-align: top;
`;
const $116268a9005e03a0$export$ffa61c425f593078 = (0, ($parcel$interopDefault($dyHF6$styledcomponents))).div`
  height: 40rem;
  width: 50rem;
`;


let $28797477c09ece12$var$config;
function $28797477c09ece12$export$ee3fba7cd2f8c355() {
    return $28797477c09ece12$var$config;
}
function $28797477c09ece12$export$a9c6c3563e9053d(newConfig) {
    $28797477c09ece12$var$config = newConfig;
}


const $6c4d418093d85b71$var$getStaticImageUrl = (value, apiKey)=>{
    const loc = `${value.lat},${value.lng}`;
    const params = {
        key: apiKey,
        center: loc,
        markers: loc,
        zoom: 13,
        scale: 2,
        size: "640x300"
    };
    const qs = Object.keys(params).reduce((res, param)=>{
        return res.concat(`${param}=${encodeURIComponent(params[param])}`);
    }, []);
    return `https://maps.googleapis.com/maps/api/staticmap?${qs.join("&")}`;
};
class $6c4d418093d85b71$var$GeopointInput extends (0, ($parcel$interopDefault($dyHF6$react))).PureComponent {
    _geopointInputId = (0, $dyHF6$lodash.uniqueId)("GeopointInput");
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false
        };
    }
    setEditButton = (el)=>{
        this.editButton = el;
    };
    focus() {
        if (this.editButton) this.editButton.focus();
    }
    handleToggleModal = ()=>{
        this.setState((prevState)=>({
                modalOpen: !prevState.modalOpen
            }));
    };
    handleCloseModal = ()=>{
        this.setState({
            modalOpen: false
        });
    };
    handleChange = (latLng)=>{
        const { schemaType: schemaType , onChange: onChange  } = this.props;
        onChange([
            (0, $dyHF6$sanity.setIfMissing)({
                _type: schemaType.name
            }),
            (0, $dyHF6$sanity.set)(latLng.lat(), [
                "lat"
            ]),
            (0, $dyHF6$sanity.set)(latLng.lng(), [
                "lng"
            ]), 
        ]);
    };
    handleClear = ()=>{
        const { onChange: onChange  } = this.props;
        onChange((0, $dyHF6$sanity.unset)());
    };
    render() {
        const { value: value , readOnly: readOnly , geoConfig: config , path: path , changed: changed , focused: focused  } = this.props;
        const { modalOpen: modalOpen  } = this.state;
        if (!config || !config.apiKey) return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)("p", {
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("a", {
                            href: "https://sanity.io/docs/schema-types/geopoint-type",
                            children: "Geopoint type"
                        }),
                        " needs a Google Maps API key with access to:"
                    ]
                }),
                /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("li", {
                            children: "Google Maps JavaScript API"
                        }),
                        /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("li", {
                            children: "Google Places API Web Service"
                        }),
                        /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("li", {
                            children: "Google Static Maps API"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("p", {
                    children: "Please enter the API key with access to these services in your googleMapsInput plugin config."
                })
            ]
        });
        return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)((0, $dyHF6$reactjsxruntime.Fragment), {
            children: [
                value && /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanity.ChangeIndicator), {
                    path: path,
                    isChanged: changed,
                    hasFocus: !!focused,
                    children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $116268a9005e03a0$export$1c4ad7c095d42d37), {
                        src: $6c4d418093d85b71$var$getStaticImageUrl(value, config.apiKey),
                        alt: "Map location"
                    })
                }),
                !readOnly && /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Box), {
                    marginTop: 4,
                    children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)((0, $dyHF6$sanityui.Grid), {
                        columns: 2,
                        gap: 2,
                        children: [
                            /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Button), {
                                mode: "ghost",
                                icon: value && (0, $dyHF6$sanityicons.EditIcon),
                                padding: 3,
                                ref: this.setEditButton,
                                text: value ? "Edit" : "Set location",
                                onClick: this.handleToggleModal
                            }),
                            value && /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Button), {
                                tone: "critical",
                                icon: (0, $dyHF6$sanityicons.TrashIcon),
                                padding: 3,
                                mode: "ghost",
                                text: "Remove",
                                onClick: this.handleClear
                            })
                        ]
                    })
                }),
                modalOpen && /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanityui.Dialog), {
                    id: `${this._geopointInputId}_dialog`,
                    onClose: this.handleCloseModal,
                    header: "Place the marker on the map",
                    width: 1,
                    children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $116268a9005e03a0$export$ffa61c425f593078), {
                        children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $ffeb69a200895c22$export$a628545bcf173896), {
                            config: (0, $28797477c09ece12$export$ee3fba7cd2f8c355)(),
                            children: (api)=>/*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $a24f16af03c18a4b$export$9a2476e65b6b92a7), {
                                    api: api,
                                    value: value || undefined,
                                    onChange: readOnly ? undefined : this.handleChange,
                                    defaultLocation: config.defaultLocation,
                                    defaultZoom: config.defaultZoom
                                })
                        })
                    })
                })
            ]
        });
    }
}
var $6c4d418093d85b71$export$2e2bcd8739ae039 = $6c4d418093d85b71$var$GeopointInput;













class $2336979407935278$export$21b07c8f274aebd5 extends $dyHF6$react.PureComponent {
    eventHandlers = {};
    componentDidMount() {
        const { from: from , to: to , api: api , map: map , zIndex: zIndex , onClick: onClick , color: color , arrowRef: arrowRef  } = this.props;
        const lineSymbol = {
            path: api.SymbolPath.FORWARD_OPEN_ARROW
        };
        this.line = new api.Polyline({
            map: map,
            zIndex: zIndex,
            path: [
                from,
                to
            ],
            icons: [
                {
                    icon: lineSymbol,
                    offset: "50%"
                }
            ],
            strokeOpacity: 0.55,
            strokeColor: color ? color.text : "black"
        });
        if (onClick) this.eventHandlers.click = api.event.addListener(this.line, "click", onClick);
        if (arrowRef) arrowRef.current = this.line;
    }
    componentDidUpdate(prevProps) {
        if (!this.line) return;
        const { from: from , to: to , map: map  } = this.props;
        if (!(0, $97ec7b8b370674b5$export$ad553d4d3a617f20)(prevProps.from, from) || !(0, $97ec7b8b370674b5$export$ad553d4d3a617f20)(prevProps.to, to)) this.line.setPath([
            from,
            to
        ]);
        if (prevProps.map !== map) this.line.setMap(map);
    }
    componentWillUnmount() {
        if (this.line) this.line.setMap(null);
        if (this.eventHandlers.click) this.eventHandlers.click.remove();
    }
    // eslint-disable-next-line class-methods-use-this
    render() {
        return null;
    }
}


function $a4e9fc866b2a477c$export$f432217b31ec4a77({ diff: diff , api: api , map: map , label: label  }) {
    const { fromValue: from , toValue: to  } = diff;
    const annotation = diff.isChanged ? diff.annotation : undefined;
    const userColor = (0, $dyHF6$sanity.useUserColor)(annotation ? annotation.author : null) || undefined;
    const fromRef = $dyHF6$react.useRef();
    const toRef = $dyHF6$react.useRef();
    return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsxs)((0, $dyHF6$reactjsxruntime.Fragment), {
        children: [
            from && /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $03ff3d51ebf52598$export$e98856a975cab58e), {
                api: api,
                map: map,
                position: from,
                zIndex: 0,
                opacity: 0.55,
                markerRef: fromRef,
                color: userColor
            }),
            from && to && /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $2336979407935278$export$21b07c8f274aebd5), {
                api: api,
                map: map,
                from: from,
                to: to,
                zIndex: 1,
                color: userColor
            }),
            to && /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $03ff3d51ebf52598$export$e98856a975cab58e), {
                api: api,
                map: map,
                position: to,
                zIndex: 2,
                markerRef: toRef,
                label: label,
                color: userColor
            })
        ]
    });
}



const $c02dd8e49e4bafdc$export$35b4f62b8f8d707c = (0, ($parcel$interopDefault($dyHF6$styledcomponents))).div`
  position: relative;
  min-height: 200px;

  &:empty {
    background-color: var(--card-skeleton-color-from);
    display: table;
    width: 100%;
  }

  &:empty:after {
    content: 'Missing/invalid data';
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    position: relative;
  }
`;



const $5245dd3554e263be$export$2d0695678527b4cc = ({ diff: diff , schemaType: schemaType  })=>{
    return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $c02dd8e49e4bafdc$export$35b4f62b8f8d707c), {
        children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $ffeb69a200895c22$export$a628545bcf173896), {
            config: (0, $28797477c09ece12$export$ee3fba7cd2f8c355)(),
            children: (api)=>/*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)($5245dd3554e263be$var$GeopointDiff, {
                    api: api,
                    diff: diff,
                    schemaType: schemaType
                })
        })
    });
};
function $5245dd3554e263be$var$GeopointDiff({ api: api , diff: diff  }) {
    const fromValue = (diff.fromValue || []).filter($5245dd3554e263be$var$hasCoordinates);
    const toValue = (diff.toValue || []).filter($5245dd3554e263be$var$hasCoordinates);
    if (fromValue.length === 0 && toValue.length === 0) return null;
    const bounds = $5245dd3554e263be$var$getBounds(fromValue, toValue, api);
    return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $b4ba0a9d820dad94$export$4ad1bae46276c5ce), {
        api: api,
        location: bounds.getCenter().toJSON(),
        mapTypeControl: false,
        controlSize: 20,
        bounds: bounds,
        children: (map)=>/*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$reactjsxruntime.Fragment), {
                children: diff.items.map(({ toIndex: toIndex , diff: pointDiff  })=>{
                    if (!$5245dd3554e263be$var$isChangeDiff(pointDiff)) return null;
                    return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $a4e9fc866b2a477c$export$f432217b31ec4a77), {
                        api: api,
                        map: map,
                        diff: pointDiff,
                        label: `${toIndex}`
                    }, toIndex);
                })
            })
    });
}
function $5245dd3554e263be$var$isChangeDiff(diff) {
    return diff.action !== "unchanged" && diff.type === "object";
}
function $5245dd3554e263be$var$hasCoordinates(point) {
    return typeof point.lat === "number" && typeof point.lng === "number";
}
function $5245dd3554e263be$var$getBounds(fromValue, toValue, api) {
    const bounds = new api.LatLngBounds();
    const points = [
        ...fromValue || [],
        ...toValue || []
    ];
    points.forEach((point)=>bounds.extend(point));
    return bounds;
}










const $59d44c8f30c12966$export$6b7bf6aeccd8ac3f = ({ diff: diff , schemaType: schemaType  })=>{
    return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $c02dd8e49e4bafdc$export$35b4f62b8f8d707c), {
        children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $ffeb69a200895c22$export$a628545bcf173896), {
            config: (0, $28797477c09ece12$export$ee3fba7cd2f8c355)(),
            children: (api)=>/*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)($59d44c8f30c12966$var$GeopointDiff, {
                    api: api,
                    diff: diff,
                    schemaType: schemaType
                })
        })
    });
};
function $59d44c8f30c12966$var$GeopointDiff({ api: api , diff: diff  }) {
    const { fromValue: fromValue , toValue: toValue  } = diff;
    const annotation = (0, $dyHF6$sanity.getAnnotationAtPath)(diff, [
        "lat"
    ]) || (0, $dyHF6$sanity.getAnnotationAtPath)(diff, [
        "lng"
    ]) || (0, $dyHF6$sanity.getAnnotationAtPath)(diff, []);
    const center = $59d44c8f30c12966$var$getCenter(diff, api);
    const bounds = fromValue && toValue ? $59d44c8f30c12966$var$getBounds(fromValue, toValue, api) : undefined;
    return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $dyHF6$sanity.DiffTooltip), {
        annotations: annotation ? [
            annotation
        ] : [],
        description: $59d44c8f30c12966$var$getAction(diff),
        children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $b4ba0a9d820dad94$export$4ad1bae46276c5ce), {
                api: api,
                location: center,
                mapTypeControl: false,
                controlSize: 20,
                bounds: bounds,
                scrollWheel: false,
                children: (map)=>/*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $a4e9fc866b2a477c$export$f432217b31ec4a77), {
                        api: api,
                        map: map,
                        diff: diff
                    })
            })
        })
    });
}
function $59d44c8f30c12966$var$getBounds(fromValue, toValue, api) {
    return new api.LatLngBounds().extend(fromValue).extend(toValue);
}
function $59d44c8f30c12966$var$getCenter(diff, api) {
    const { fromValue: fromValue , toValue: toValue  } = diff;
    if (fromValue && toValue) return $59d44c8f30c12966$var$getBounds(fromValue, toValue, api).getCenter().toJSON();
    if (fromValue) return fromValue;
    if (toValue) return toValue;
    throw new Error("Neither a from or a to value present");
}
function $59d44c8f30c12966$var$getAction(diff) {
    const { fromValue: fromValue , toValue: toValue  } = diff;
    if (fromValue && toValue) return "Moved";
    else if (fromValue) return "Removed";
    else if (toValue) return "Added";
    return "Unchanged";
}


const $329a1cedcedb1349$export$626ae7d0cf8f9143 = (0, $dyHF6$sanity.createPlugin)((config)=>{
    (0, $28797477c09ece12$export$a9c6c3563e9053d)(config);
    return {
        name: "google-maps-input",
        form: {
            components: {
                input (props) {
                    if ($329a1cedcedb1349$var$isGeopoint(props.schemaType)) {
                        const castedProps = props;
                        return /*#__PURE__*/ (0, $dyHF6$reactjsxruntime.jsx)((0, $6c4d418093d85b71$export$2e2bcd8739ae039), {
                            ...castedProps,
                            geoConfig: config
                        });
                    }
                    return props.renderDefault(props);
                }
            }
        }
    };
});
function $329a1cedcedb1349$var$isGeopoint(schemaType) {
    return $329a1cedcedb1349$var$isType("geopoint", schemaType);
}
function $329a1cedcedb1349$var$isType(name, schema) {
    if (schema?.name === name) return true;
    else if (!schema?.name) return false;
    return $329a1cedcedb1349$var$isType(name, schema?.type);
}


//# sourceMappingURL=index.js.map
