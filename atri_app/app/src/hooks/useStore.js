import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex58": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Flex64": {
      "callbacks": {}
    },
    "Flex65": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Flex83": {
      "callbacks": {}
    },
    "Flex81": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Flex82": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex80": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Flex87": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "Flex92": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Flex99": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Flex101": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Flex106": {
      "callbacks": {}
    },
    "Flex107": {
      "callbacks": {}
    },
    "Flex108": {
      "callbacks": {}
    },
    "Flex109": {
      "callbacks": {}
    },
    "Flex110": {
      "callbacks": {}
    },
    "Flex111": {
      "callbacks": {}
    },
    "Flex112": {
      "callbacks": {}
    },
    "Flex115": {
      "callbacks": {}
    },
    "Flex113": {
      "callbacks": {}
    },
    "Flex114": {
      "callbacks": {}
    },
    "Flex116": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex118": {
      "callbacks": {}
    },
    "Flex119": {
      "callbacks": {}
    },
    "Flex120": {
      "callbacks": {}
    },
    "Flex122": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Div32": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Flex136": {
      "callbacks": {}
    },
    "Flex137": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Flex139": {
      "callbacks": {}
    },
    "Flex140": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Flex146": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Flex151": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Flex152": {
      "callbacks": {}
    },
    "Flex153": {
      "callbacks": {}
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button1": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button2": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "The best place to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button4": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template%20(1).svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0bded3b95d9731ecc4_logo-postmates-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b326163db6497f05b_logo-rappi-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b5b82ce962fe1736b_logo-grubhub-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox11": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox12": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox13": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox16": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dcfbb9e09be616e71d818_menu-main-dishes-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox19": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dcfb5dd3ca61a6dd0ae1c_menu-drinks-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox22": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox21": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox20": {
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dcfafe6321c66cb474f97_menu-desserts-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button6": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button5": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image18": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0bdba0fb13cfd32fc0_about-home-restaurante-x-template-p-1080%20(1).jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Come and visit us"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a1718503bfe60f49_location-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox24": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox40": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3400864a9087440a4_email-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox41": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c36165d583fe91702b_phone-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox42": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox43": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox44": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris."
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button19": {
      "custom": {
        "text": "Join our team"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button20": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox45": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox46": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox49": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox47": {
      "custom": {
        "text": "$ 10.99 USD"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox51": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox52": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc9ba43f4163d5f7b436e_chocolate-milkshake-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc56043f416c4db7b3322_pancakes-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox53": {
      "custom": {
        "text": "$ 8.99 USD"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox58": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c360af92b81a49e435_Instagram-02-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox59": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox66": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc414d54d4e45ccac841f_regular-soda-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "$ 1.99 USD"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc4d28ae55806547e5dba_chicken-burger-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox68": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox61": {
      "custom": {
        "text": "$ 9.99 USD"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox69": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox70": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc50743f41639377b2fd8_ice-cream-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "$ 3.99 USD"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button12": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button13": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox71": {
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox72": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum. Order online"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button14": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button15": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image32": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c364b456b93fb50d6d_cta-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox75": {
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Carousel1": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel2": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel3": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "1"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image33": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left-arrow-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "“You must try these burgers”"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox78": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image40": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image41": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image42": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/face1.jpg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox79": {
      "custom": {
        "text": "Matt Cannon"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox80": {
      "custom": {
        "text": "San Diego, CA"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button16": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button17": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox82": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox83": {
      "custom": {
        "text": "Browse our articles"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbe9e3823ad75e50cfc8d_blog-post-featured-image-01-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox85": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox86": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox87": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbcaac6330b375d0f90ca_blog-post-featured-image-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox88": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox89": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox90": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox91": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image49": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbc8ef398638f6395578f_blog-post-featured-image-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image50": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbb79aa873fb79780189b_blog-post-featured-image-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox92": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox93": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox94": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox95": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image51": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbc58e6083f444f1883f5_blog-post-featured-image-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox96": {
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox97": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox98": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image52": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a1718503bfe60f49_location-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image53": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c36165d583fe91702b_phone-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox99": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3400864a9087440a4_email-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox100": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Button18": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox101": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Input1": {
      "custom": {
        "value": "",
        "placeholder": "John Carter",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "Input2": {
      "custom": {
        "value": "",
        "placeholder": "example@email.com",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "TextBox102": {
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox103": {
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Input3": {
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angeles",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "Input4": {
      "custom": {
        "value": "",
        "placeholder": "(123) 456 - 789",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "TextBox104": {
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox105": {
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Input5": {
      "custom": {
        "value": "",
        "placeholder": "Ex. 2:00PM",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "Input6": {
      "custom": {
        "value": "",
        "placeholder": "Day and month",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "TextBox106": {
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox107": {
      "custom": {
        "text": "Add a note"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Input7": {
      "custom": {
        "value": "",
        "placeholder": "Do you have any note for us ?"
      },
      "callbacks": {}
    },
    "TextBox112": {
      "custom": {
        "text": "The email is sent succesfully....."
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox113": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox114": {
      "custom": {
        "text": "Follow us"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image55": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c40b5fd9150a07d9ad_Instagram-01-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image56": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c360af92b81a49e435_Instagram-02-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image57": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image58": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image59": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image60": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image61": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image68": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image69": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image70": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image71": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image67": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox116": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox119": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox120": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox121": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox122": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox123": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox124": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox125": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox126": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox127": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox128": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox129": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox130": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox131": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox132": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox133": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image72": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image73": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image74": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image75": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": []
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
