"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./App.css");
require("./sass/index.scss");
require("./css/index.min.css");
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./Section/Home"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LazyLoadedAdmin = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => _interopRequireWildcard(require("./Section/Admin"))));
function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/admin",
    element: /*#__PURE__*/_react.default.createElement(_react.Suspense, {
      fallback: /*#__PURE__*/_react.default.createElement("div", null, "Loading...")
    }, /*#__PURE__*/_react.default.createElement(LazyLoadedAdmin, null))
  })));
}
var _default = exports.default = App;
"use strict";

var _react = require("@testing-library/react");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test('renders learn react link', () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_App.default, null));
  const linkElement = _react.screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import reportWebVitals from "./reportWebVitals";

const root = _client.default.createRoot(document.getElementById("root"));
root.render(
/*#__PURE__*/
// <React.StrictMode>
_react.default.createElement(_App.default, null)
// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    Promise.resolve().then(() => _interopRequireWildcard(require('web-vitals'))).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
var _default = exports.default = reportWebVitals;
"use strict";

require("@testing-library/jest-dom");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NavBar = _interopRequireDefault(require("../components/NavBar"));
var _CreatorHome = _interopRequireDefault(require("../components/CreatorHome"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Admin() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_NavBar.default, {
    isAdmin: true
  }), /*#__PURE__*/_react.default.createElement(_CreatorHome.default, null));
}
var _default = exports.default = Admin;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NavBar = _interopRequireDefault(require("../components/NavBar"));
var _Body = _interopRequireDefault(require("../components/Body"));
var _Footer = _interopRequireDefault(require("../components/Footer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Home() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_NavBar.default, null), /*#__PURE__*/_react.default.createElement(_Body.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}
var _default = exports.default = Home;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MobilePhone = _interopRequireDefault(require("./MobilePhone"));
var _Avatar = _interopRequireDefault(require("../shared/Avatar"));
var _UserWithAudio = _interopRequireDefault(require("../shared/UserWithAudio"));
var _gift = require("./gift.svg");
var _EmojiEmotionsSharp = _interopRequireDefault(require("@mui/icons-material/EmojiEmotionsSharp"));
var _EastSharp = _interopRequireDefault(require("@mui/icons-material/EastSharp"));
var _LocationOnSharp = _interopRequireDefault(require("@mui/icons-material/LocationOnSharp"));
var _Carousel = _interopRequireDefault(require("../Carousel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Body = () => {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "first_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header1"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "header1__subheader1"
  }, "Stay close to your"), /*#__PURE__*/_react.default.createElement("span", {
    className: "header1__subheader2"
  }, "favorite people"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "second_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "phoneNumber_container"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "phoneNumber_input",
    placeholder: "Enter your phone number"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "phoneNumber_button",
    "aria-label": "Get started"
  }, "Get started"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "third_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mobilePhoneContainer"
  }, /*#__PURE__*/_react.default.createElement(_MobilePhone.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "userWithAudio1"
  }, /*#__PURE__*/_react.default.createElement(_UserWithAudio.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "giftContainer"
  }, /*#__PURE__*/_react.default.createElement(_gift.ReactComponent, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "giftMessage"
  }, "You received", /*#__PURE__*/_react.default.createElement("br", null), " a Gift"), /*#__PURE__*/_react.default.createElement("div", {
    className: "giftButton"
  }, "View gift")), /*#__PURE__*/_react.default.createElement("div", {
    className: "userWithoutAudio"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    imageWidth: "36px",
    imageHeight: "36px"
    // containerColor="#a9f3a9s"
    ,
    imageUrl: "https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "yellowGradient1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "violetGradient"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "yellowGradient2"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "fourth_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content_section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "smiley"
  }, /*#__PURE__*/_react.default.createElement(_EmojiEmotionsSharp.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "content_header"
  }, "Express yourself", /*#__PURE__*/_react.default.createElement("br", null), "freely"), /*#__PURE__*/_react.default.createElement("div", {
    className: "content_description"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates esse sint maiores enim perferendis vel corporis et consequatur incidunt aliquam impedit iusto obcaecati atque placeat maxime"), /*#__PURE__*/_react.default.createElement("div", {
    className: "learnMore"
  }, /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Learn more"
  }, "Learn more ", /*#__PURE__*/_react.default.createElement(_EastSharp.default, null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "image_section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image_section_imageContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image_section_imageBg"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "person",
    src: "https://s3-alpha-sig.figma.com/img/a958/3ddc/8f862d741130961807f972b30e6b4ff9?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hwegLBqrRxXlhcG3ucqJCyar5EZE0F6vzGNKCDXXfyQGb09s4h8bn7h-ztUH6tM1LMJiU5uUAXT6btuy4wxDEAHrU4~DiaYU0zvSkB8vT52kOedwyIhtYaZckPOqtiS9pP7mB46hugfuPYBuqpu2vg200IDl8b4z~trJHdoyyxDlp5VGCfTDBVBCUUiFMn0GTBb6OubLIQEKQ~xL2lnFVnZSkuwDpugbaCfKoYmC0AZ62p9UShajd5GzLMPApR8dCQ5xfljGX3prHSvN2dPLhoKAuX0vA8kdESn-sOJ6PqCYgnLXeZgFXo1iEW2lXq08dL~7V4rdu2lOt4YrOJQ-GA__",
    alt: "personImage"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_mobile_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_mobile"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_mobileUser_container"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    imageWidth: "36px",
    imageHeight: "36px"
    // containerColor="#a9f3a9s"
    ,
    imageUrl: "https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_mobileUser_userName_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_mobileUser_userName"
  }, "Sara john"), /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_mobileUser_userName_timestamp"
  }, "2hr ago"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_icon_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_icon"
  }, /*#__PURE__*/_react.default.createElement("div", null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_header"
  }, "Create and ", /*#__PURE__*/_react.default.createElement("br", null), "Share"), /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_description"
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi corrupti vel minus, maxime quos eum est sapiente sunt architecto tenetur nemo atque fugit sint iusto, laboriosam et vitae, fugiat beatae. Odio libero ducimus, vero totam animi saepe esse accusamus voluptate harum voluptates dolor cum perspiciatis natus culpa corporis nobis vel!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_button_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fifth_container_button"
  }, /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Learn more"
  }, "Learn more ", /*#__PURE__*/_react.default.createElement(_EastSharp.default, null)))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_content_section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_location_icon"
  }, /*#__PURE__*/_react.default.createElement(_LocationOnSharp.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_header"
  }, "Create and ", /*#__PURE__*/_react.default.createElement("br", null), "Share"), /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_description"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque id, recusandae beatae mollitia magni, quae provident magnam eligendi nihil esse quibusdam quod repellendus eum! Natus, vero dolore. Ab quidem debitis velit optio necessitatibus, totam ratione. Vero quaerat tenetur quo nobis. Non perspiciatis earum eaque expedita quas quam, temporibus accusamus iure."), /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_button_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_button"
  }, /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Learn more"
  }, "Learn more ", /*#__PURE__*/_react.default.createElement(_EastSharp.default, null))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_image_section"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "sixth_container_personImage",
    src: "https://s3-alpha-sig.figma.com/img/deb2/0d3e/f0a942e7ab395f03946acb28ff909b07?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0q5pp1LHwn~RDNoWeqlCo-ou91EIl~LDNOXTwouDdWth7dJzH62OfbuF7rMiX5Zz00FYlTdF7SuE~06oN1Q4Bt24zazbLMNbC-PoCRlwQ8vqT91CM~2tIxeXg2dj1JkwyE5ehrZATsBi5EVInuBOo5WFCle-fw3mFgeR~RWNAmZMeKmhEie983QleX~7f2H9yGs09ym6wCdNbshMOQwhspjClbJRZXGF62GWpUKBSRWuDootc57OJRbdUnCUl2B31gWBYLgKxFmy3NflcyIOMlpwIeGa~~XZE1LqnPRrXdTWX9SQJ3s7bfuu4hlhDSs~p4uSyflkkAQP2DM-ucS2g__",
    alt: "man looking mobile"
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: "sixth_container_mapIcon",
    src: "https://s3-alpha-sig.figma.com/img/20d5/42a6/90b5134bd754639f83d74cf5f66ae355?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OkHVTS2oL3BXbmnQWZUmRRcfVCv3To5wujMteN-41Jxo1rDyWCCdv10fWzMO12ewRqJZdBshkpIw9oheLfJ4m7~aRjp6tb1yqrCvIHfjT-vUnMpadpxkg4QiT5sPxzNp930VwvJ1iUiVKKkhY~mf6~7zMOA8sdll4BM8PvyO~u6CL~DnPiIv~at9nVHOUqCxE6AsTUHCwooFWPo4LZEfkUSRT65WgAHu3EGZz25wQTtklfvhwbGLMIU2fMsI77-Wh5JEScSoFpKxGwLUmYzsfcarGbVKKUoJzlYxf-wm3eXmtZHAboj9MgzOl-NfFZk9b015b7VX26ohui5aj50ztg__",
    alt: "map icon"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_person_chat"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    imageWidth: "36px",
    imageHeight: "36px"
    // containerColor="#a9f3a9s"
    ,
    imageUrl: "https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sixth_container_person_chat_message"
  }, "I am here!")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "seventh_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "seventh_container_text_section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "seventh_container_header"
  }, "Around 5M+ creators"), /*#__PURE__*/_react.default.createElement("div", {
    className: "seventh_container_description"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero beatae consectetur corporis, blanditiis")), /*#__PURE__*/_react.default.createElement("div", {
    className: "seventh_container_carousel_Section"
  }, /*#__PURE__*/_react.default.createElement(_Carousel.default, null))));
};
var _default = exports.default = Body;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PlayCircleFilled = _interopRequireDefault(require("@mui/icons-material/PlayCircleFilled"));
var _Avatar = _interopRequireDefault(require("../shared/Avatar"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const heights = [20, 40, 60, 80, 100, 80, 60, 40, 20, 40, 60, 80, 100, 80, 60, 40, 20, 40, 60, 80];
const MobilePhone = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "phone_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "userContainer"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    imageUrl: "https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__",
    imageWidth: "25px",
    imageHeight: "25px"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "nameAndStatus"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "name"
  }, "Sara John"), /*#__PURE__*/_react.default.createElement("div", {
    className: "status"
  }, "Active now"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "firstChat"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "firstChat_text"
  }, /*#__PURE__*/_react.default.createElement("p", null, " Yeah sure! get him too")), /*#__PURE__*/_react.default.createElement("div", {
    className: "firstChat_timeStamp"
  }, /*#__PURE__*/_react.default.createElement("p", null, "12:20PM"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "secondChat"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "secondChat_text"
  }, /*#__PURE__*/_react.default.createElement("p", null, " Yeah sure! get him too")), /*#__PURE__*/_react.default.createElement("div", {
    className: "secondChat_timeStamp"
  }, /*#__PURE__*/_react.default.createElement("p", null, "12:20PM"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "thirdChat"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "thirdChat_audio"
  }, /*#__PURE__*/_react.default.createElement(_PlayCircleFilled.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "sound-wave"
  }, heights.map((height, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "bar",
    style: {
      height: "".concat(height, "%")
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "thirdChat_timeStamp"
  }, /*#__PURE__*/_react.default.createElement("p", null, "12:20PM"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bagImage_container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "bagImage",
    className: "bagImage",
    "aria-label": "Bag Image",
    src: "https://s3-alpha-sig.figma.com/img/eabf/3138/8d6a4e94ccc69168521be958a06a9255?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k7D5gBPN7AlayvMNcy4HMKzYZxJjjscTtmqeTqh8hxlhOjM5JgtF3LnPxYReQ62lrUEVJhD4Poh40jonsmaJYiJ2Uk7OHUp85QgWqnKobZT-amlxb2sQ0Jc28xPW0tquCbXaOj~C8Pwdg0DaUZRjk4OQpOXDoa-ix3ZeDJ1otNhC6qL4DjLdmJqd8RtcDVYcSdlIYENUXnIJP66R4V7x70HBCxhEfrhIuf2URESBmBU4MikWWNAOunb-H7Ub5BGKKonqSFuhQ2CJy-tY2TyiFE40tAgJygOOdAronB3EoQLcs2r185OoGjAte4pOdqCXDhwr06aacgrdbPQSszlT4g__"
  })));
};
var _default = exports.default = MobilePhone;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Card(props) {
  const {
    name,
    gender,
    status
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card_container",
    style: {
      background: "url(\"https://xsgames.co/randomusers/avatar.php?g=".concat(gender, "&random=").concat(Math.random(), "\") center center / cover no-repeat")
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card_container_status"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "card_container_indicator",
    style: {
      backgroundColor: status === "inactive" ? "red" : "green"
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, capitalizeFirstLetter(status))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card_container_userName"
  }, /*#__PURE__*/_react.default.createElement("p", null, name)));
}
var _default = exports.default = Card;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Card = _interopRequireDefault(require("./Card"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Carousel() {
  const containerRef = (0, _react.useRef)(null);
  const [userDetails, setUserDetails] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    try {
      const url = "https://gorest.co.in/public/v2/users";
      const result = await fetch(url, {
        method: "GET"
      });
      const response = await result.json();
      setUserDetails(response);
    } catch (error) {
      console.log({
        error
      });
    }
  };
  (0, _react.useEffect)(() => {
    const scrollContainer = containerRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // Speed of the scroll

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };
    scroll();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel_container",
    ref: containerRef
  }, userDetails !== null && userDetails !== void 0 && userDetails.length ? userDetails.map(user => /*#__PURE__*/_react.default.createElement(_Card.default, {
    key: user.id,
    name: user.name,
    gender: user.gender,
    status: user.status
  })) : null);
}
var _default = exports.default = Carousel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CreatorTable;
var _react = _interopRequireWildcard(require("react"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _material = require("@mui/material");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _DeleteDialog = _interopRequireDefault(require("./DeleteDialog"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function CreatorTable(props) {
  const {
    userDetails,
    deleteUser,
    onClickOfEdit,
    isDataFetching
  } = props;
  const [showDeleteDialog, setShowDeleteDialog] = (0, _react.useState)(false);
  const [userDetailsToDelete, setUserDetailsToDelete] = (0, _react.useState)({});
  const handleDeleteDialogClose = () => {
    setShowDeleteDialog(false);
    setUserDetailsToDelete({});
  };
  return /*#__PURE__*/_react.default.createElement(_TableContainer.default, {
    component: _Paper.default
  }, /*#__PURE__*/_react.default.createElement(_Table.default, {
    sx: {
      minWidth: 650
    },
    "aria-label": "Table for showing the creator list"
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    className: "customTableCell"
  }, "Name"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    className: "customTableCell",
    align: "left"
  }, "E-mail"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    className: "customTableCell",
    align: "left"
  }, "Gender"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    className: "customTableCell",
    align: "left"
  }, "Available for chat"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    className: "customTableCell",
    align: "right"
  }, "Actions"))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, userDetails !== null && userDetails !== void 0 && userDetails.length && !isDataFetching ? userDetails.map(row => /*#__PURE__*/_react.default.createElement(_TableRow.default, {
    key: row.name,
    sx: {
      "&:last-child td, &:last-child th": {
        border: 0
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    component: "th",
    scope: "row"
  }, row.name), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, row.email), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, row.gender), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: row.status === "active" ? "green" : "red"
    }
  }, capitalizeFirstLetter(row.status))), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "right"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "action_tableCell"
  }, /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Button to edit creator",
    className: "action_edit_button",
    onClick: () => {
      onClickOfEdit(row);
    }
  }, "Edit"), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    "aria-label": "delete",
    onClick: () => {
      setUserDetailsToDelete({
        id: row === null || row === void 0 ? void 0 : row.id,
        name: row.name
      });
      setShowDeleteDialog(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, null)))))) : /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    colSpan: 5
  }, /*#__PURE__*/_react.default.createElement(_material.Skeleton, {
    animation: "wave",
    variant: "rectangular",
    width: "100%",
    height: 400
  }))))), showDeleteDialog ? /*#__PURE__*/_react.default.createElement(_DeleteDialog.default, {
    open: showDeleteDialog,
    userName: userDetailsToDelete.name,
    handleClose: handleDeleteDialogClose,
    handleProceed: () => {
      handleDeleteDialogClose();
      deleteUser(userDetailsToDelete.id);
    }
  }) : null);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function DeleteDialog(props) {
  const {
    open,
    handleClose,
    handleProceed,
    userName
  } = props;
  return /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    open: open,
    onClose: handleClose,
    "aria-label": "Dialog for confirming the delete",
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_material.DialogTitle, {
    id: "alert-dialog-title"
  }, "Delete Creator"), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, {
    id: "alert-dialog-description",
    "aria-label": "message to confirm the delete"
  }, "Are you sure you want to delete the creator named ", userName)), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    "aria-label": "No",
    onClick: handleClose
  }, "No"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    "aria-label": "yes",
    onClick: handleProceed,
    autoFocus: true
  }, "Yes")));
}
var _default = exports.default = DeleteDialog;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
function EditModal(props) {
  var _errorMessages$name, _errorMessages$email;
  const {
    open,
    handleClose,
    creatorDetails,
    saveCreator,
    handleCreatorDetailsEdit,
    errorMessages,
    setErrorMessages,
    isDataFetching,
    showEditModal
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Add a new creator"), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    "aria-label": "close",
    className: "close-button",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_Close.default, null))), /*#__PURE__*/_react.default.createElement("form", {
    className: "form-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/_react.default.createElement(_material.FormLabel, {
    className: "form-label"
  }, "Creator Name"), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    placeholder: "Name",
    variant: "outlined",
    fullWidth: true,
    error: Boolean(errorMessages) && (errorMessages === null || errorMessages === void 0 || (_errorMessages$name = errorMessages.name) === null || _errorMessages$name === void 0 ? void 0 : _errorMessages$name.length),
    helperText: (errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.name) && "Name ".concat(errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.name),
    value: creatorDetails === null || creatorDetails === void 0 ? void 0 : creatorDetails.name,
    margin: "normal",
    onChange: evt => {
      setErrorMessages(prev => ({
        ...prev,
        name: ""
      }));
      handleCreatorDetailsEdit("name", evt.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/_react.default.createElement(_material.FormLabel, {
    className: "form-label"
  }, "Email"), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    placeholder: "Email",
    variant: "outlined",
    fullWidth: true,
    error: Boolean(errorMessages) && (errorMessages === null || errorMessages === void 0 || (_errorMessages$email = errorMessages.email) === null || _errorMessages$email === void 0 ? void 0 : _errorMessages$email.length),
    helperText: (errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.email) && "Email ".concat(errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.email),
    value: creatorDetails === null || creatorDetails === void 0 ? void 0 : creatorDetails.email,
    margin: "normal",
    onChange: evt => {
      setErrorMessages(prev => ({
        ...prev,
        email: ""
      }));
      handleCreatorDetailsEdit("email", evt.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/_react.default.createElement(_material.FormLabel, {
    className: "form-label"
  }, "Gender"), /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    fullWidth: true,
    margin: "normal",
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_material.Select, {
    value: creatorDetails.gender,
    onChange: evt => handleCreatorDetailsEdit("gender", evt.target.value)
  }, /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    value: "male",
    id: "male"
  }, "Male"), /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    value: "female",
    id: "female"
  }, "Female"), /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    value: "Other"
  }, "Other")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/_react.default.createElement(_material.FormLabel, {
    className: "form-label"
  }, "Available for chat"), /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    component: "fieldset",
    margin: "normal"
  }, /*#__PURE__*/_react.default.createElement(_material.RadioGroup, {
    row: true,
    value: creatorDetails.status,
    onChange: evt => handleCreatorDetailsEdit("status", evt.target.value)
  }, /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
    value: "active",
    control: /*#__PURE__*/_react.default.createElement(_material.Radio, null),
    label: "Active"
  }), /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
    value: "inactive",
    control: /*#__PURE__*/_react.default.createElement(_material.Radio, null),
    label: "Inactive"
  })))), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    color: "primary",
    "aria-label": "Button to add/save Creator",
    className: "add-button",
    onClick: () => {
      saveCreator();
    }
  }, "+ Add creator")), /*#__PURE__*/_react.default.createElement(_material.Backdrop, {
    sx: {
      color: "#fff",
      zIndex: 999
    },
    open: Boolean(isDataFetching && showEditModal),
    onClick: () => {}
  }, /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    color: "inherit"
  })))));
}
var _default = exports.default = EditModal;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _KeyboardArrowDown = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CreatorTable = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => _interopRequireWildcard(require("./CreatorTable"))));
const EditModal = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => _interopRequireWildcard(require("./EditModal"))));
function CreatorHome() {
  const [userDetails, setUserDetails] = (0, _react.useState)([]);
  const [showEditModal, setShowEditModal] = (0, _react.useState)(false);
  const [isDataFetching, setIsDataFetching] = (0, _react.useState)(false);
  const [isSavingCreator, setIsSavingCreator] = (0, _react.useState)(false);
  const [itemsPerPage, setItemsPerPage] = (0, _react.useState)(5);
  const [alertMessageDetails, setAlertMessageDetails] = (0, _react.useState)({
    showMessage: false,
    message: "",
    severity: ""
  });
  const [creatorDetails, setCreatorDetails] = (0, _react.useState)({
    name: "",
    email: "",
    gender: "male",
    status: "active"
  });
  const [errorMessages, setErrorMessages] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    getUserDetails();
  }, [itemsPerPage]);
  const saveCreator = async () => {
    try {
      setIsSavingCreator(true);
      const url = "https://gorest.co.in/public/v2/users?email=".concat(creatorDetails.email, "&name=").concat(creatorDetails.name, "&gender=").concat(creatorDetails.gender, "&status=").concat(creatorDetails.status);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb"
        }
        // body: JSON.stringify(creatorDetails),
      });
      debugger;
      setIsSavingCreator(false);
      const result = await response.json();
      if (response.status === 201) {
        setCreatorDetails({
          name: "",
          email: "",
          gender: "male",
          status: "active"
        });
        setAlertMessageDetails({
          showMessage: true,
          message: "successfully saved the creator",
          severity: "success"
        });
        setShowEditModal(false);
      } else if (response.status === 422) {
        const errorMessages = {};
        result === null || result === void 0 || result.forEach(item => {
          if (item.field === "email") {
            errorMessages.email = item.message;
          } else if (item.field === "name") {
            errorMessages.name = item.message;
          }
        });
        setErrorMessages(errorMessages);
      }
      console.log({
        result
      });
    } catch (error) {
      setAlertMessageDetails({
        showMessage: true,
        message: "something went wrong while fetching the details",
        severity: "failure"
      });
    }
  };
  const getUserDetails = async () => {
    setUserDetails([]);
    setIsDataFetching(true);
    try {
      const url = "https://gorest.co.in/public/v2/users?per_page=".concat(itemsPerPage);
      const result = await fetch(url, {
        method: "GET"
      });
      const response = await result.json();
      setUserDetails(response);
      setIsDataFetching(false);
    } catch (error) {
      console.log({
        error
      });
      setUserDetails([]);
      setAlertMessageDetails({
        showMessage: true,
        message: "something went wrong while fetching the details",
        severity: "failure"
      });
    }
  };
  const deleteUser = async userId => {
    try {
      const url = "https://gorest.co.in/public/v2/users/".concat(userId);
      const result = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb"
        }
      });
      console.log(result);
      getUserDetails();
    } catch (error) {
      setAlertMessageDetails({
        showMessage: true,
        message: "something went wrong while fetching the details",
        severity: "failure"
      });
      console.log({
        ERROR: error
      });
    }
  };
  const openEditModal = () => {
    setShowEditModal(true);
  };
  const handleCreatorDetailsEdit = (name, value) => {
    setCreatorDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const onClickOfEdit = userDetails => {
    setShowEditModal(true);
    const {
      name,
      status,
      email,
      gender
    } = userDetails;
    setCreatorDetails({
      name,
      status,
      email,
      gender
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "creatorHome_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "creatorHome_TableSection"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "creator_table_header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "creator_table_heading"
  }, "Manage creators"), /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Button to add Creator",
    className: "creator_table_addCreator",
    onClick: () => setShowEditModal(true)
  }, "+ Add new creators")), /*#__PURE__*/_react.default.createElement("div", {
    className: "creator_table_container"
  }, /*#__PURE__*/_react.default.createElement(CreatorTable, {
    userDetails: userDetails,
    deleteUser: deleteUser,
    openEditModal: openEditModal,
    onClickOfEdit: onClickOfEdit,
    isDataFetching: isDataFetching
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "creator_table_loadMore_container"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "creator_table_loadMore",
    "aria-label": "Button to load more number of creators",
    onClick: () => {
      setItemsPerPage(prev => prev + 5);
    }
  }, "Load More", /*#__PURE__*/_react.default.createElement(_KeyboardArrowDown.default, null)))), showEditModal ? /*#__PURE__*/_react.default.createElement(EditModal, {
    open: showEditModal,
    handleClose: () => {
      setCreatorDetails({
        name: "",
        email: "",
        gender: "male",
        status: "active"
      });
      setErrorMessages({});
      setShowEditModal(false);
    },
    saveCreator: saveCreator,
    creatorDetails: creatorDetails,
    handleCreatorDetailsEdit: handleCreatorDetailsEdit,
    errorMessages: errorMessages,
    setErrorMessages: setErrorMessages,
    isDataFetching: isSavingCreator,
    showEditModal: showEditModal
  }) : null, /*#__PURE__*/_react.default.createElement(_material.Snackbar, {
    open: alertMessageDetails.showMessage,
    autoHideDuration: 4000,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    onClose: () => {
      setAlertMessageDetails({
        showMessage: false,
        message: "",
        severity: ""
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Alert, {
    onClose: () => {
      setAlertMessageDetails({
        showMessage: false,
        message: "",
        severity: ""
      });
    },
    severity: (alertMessageDetails === null || alertMessageDetails === void 0 ? void 0 : alertMessageDetails.severity) || "success",
    variant: "filled",
    sx: {
      width: "100%"
    }
  }, alertMessageDetails.message)));
}
var _default = exports.default = CreatorHome;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function FooterLists(props) {
  const {
    header,
    items
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer_list_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer_list_header"
  }, header), items.map(value => /*#__PURE__*/_react.default.createElement("div", {
    className: "footer_list_items"
  }, value)));
}
var _default = exports.default = FooterLists;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchBar = _interopRequireDefault(require("./SearchBar"));
var _Avatar = _interopRequireDefault(require("../shared/Avatar"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NavBar = props => {
  const {
    isAdmin
  } = props;
  return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar_firstContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo_circle1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "logo_circle2"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#features"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#about"
  }, "Features")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#launch"
  }, "Explore creators")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#signup"
  }, "FAQ")))), !isAdmin ? /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar_secondContainer"
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.default, null), /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Button to sign in",
    className: "secondary_button"
  }, "Sign in"), /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Button to sign up",
    className: "primary_button"
  }, "Sign up")) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, "Admin"), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    imageWidth: "32px",
    imageHeight: "32px"
    // containerColor="#a9f3a9s"
    ,
    imageUrl: "https://s3-alpha-sig.figma.com/img/59a5/7acb/59fb42a6bc646831c0d45696cc92eb2d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zv6Su2mUh3qumraZy1lFKm0QRjOL2sESuPYjWvWoe~6i8qrXButQEiwoG4lSdRw5~L1n7Yxha-HFy9LF1g9KkT82X2ZLbmUVewSatj5sD9kW2n~fERztbZ9EJpUrcqBOGztm~sa4RK49i~inMha8NleR3Sn23vHrT5MQVXxVXNi5fHOLD65160KbdHSHwzWcnpBPs-Aihi00zKLs50am8YVj5QMJhtODqHm3WwViwhvY~LYDdYbmKVCqc6~i0xnqKVjbz7nv6pjxhDK51ZKtBeGbc139jqk9IthuPksAT2GrlFSt84SWyBiiQbvH8lXamPxFfAi~69RsPGRdkrQrOw__"
  })));
};
var _default = exports.default = NavBar;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iconsMaterial = require("@mui/icons-material");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SearchBar = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Search, {
    className: "search-icon"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search creators"
  }));
};
var _default = exports.default = SearchBar;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Avatar = props => {
  const {
    imageUrl,
    imageWidth,
    imageHeight,
    containerHeight,
    containerWidth,
    containerColor
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "imageContainer",
    style: {
      width: containerWidth,
      height: containerHeight,
      background: containerColor
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "userImage",
    alt: "userImage",
    "aria-label": "User image",
    style: {
      width: imageWidth,
      height: imageHeight,
      borderRadius: "100%"
    },
    src: imageUrl
  }));
};
var _default = exports.default = Avatar;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Avatar = _interopRequireDefault(require("./Avatar"));
var _PlayArrow = _interopRequireDefault(require("@mui/icons-material/PlayArrow"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const UserWithAudio = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "userWithAudio"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    imageWidth: "36px",
    imageHeight: "36px",
    containerColor: "#a9f3a9s",
    imageUrl: "https://s3-alpha-sig.figma.com/img/7bd6/a7df/b0dc1c0bc43a10c83d90e527e0946c03?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec3TCrEerBhdHlh8djhm8jSwaSK5jMy6husvz47T0dHHZD5rqe0tZ3J21HYF8MtjAYF0G6AkENWitqIqvWoJ-Nt6uH3ZqUqQejrThM1CvKiaKWPwsfmor3JJNSkSjZc5Kcud9hosQn-WlTPIBcmzt8YbiWfKNY9exlH3gdqtG09suOX7y0jbFxmcbnXt1fjH6XMQotecVn6FzgkqcDBJGvuYxez8nLAQodZ-SR7Cin2MSFriABbCaepgy38rvJkABZiEc32a3x-lpn1KhEbH-NjsdCJgQpABP0rDIZ82q1joSlsGmDSa~jnjDX39Sw8X4x5sz-~es1GhmYC4qOxj3A__"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "audioContainer"
  }, /*#__PURE__*/_react.default.createElement(_PlayArrow.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "progressBar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "playedProgress"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "unPlayedProgress"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "playTime"
  }, "0:16")));
};
var _default = exports.default = UserWithAudio;