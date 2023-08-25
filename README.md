# Namaste React

- https://github.com/YoganandaNY/namaste-react

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistant Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - ResturantContainer
- -ResturantCard
-      - Img
-      - Name of Res, Star rating, Cuisine, Delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

# Two Types of Export and Import

- Default Export and Import;

  - Export Default Component <ComponentName/VariableName>;
  - Import Component from "Path";

- Named Export and Import

  - Export const Component <ComponentName/VariableName>;
  - Import { Component } from "Path";

- We Can Use only one Default Export in Component

# React Hooks

- (Normal Javascript Utility Functions)<Two Most Imp Hooks>

  - useState() - Superpowerful State Variable in React
  - useEffect()

- There are 3 rules for useSate hooks:

  - Hooks can only be called inside React function components.
  - Hooks can only be called at the top level of a component.
  - Hooks cannot be conditional (if, for loop)
    - if(){ const [btnName] = useState(""); }

- useEffect Hook
  - If no dependency array => useEffect is called on every render.
    <!-- - useEffect(() => {
              console.log("useEffect Called");
          }); -->
  - If dependency arryy is empty = [] => useEffect is called only on initial render(just once).
    <!-- useEffect(() => {
              console.log("useEffect Called");
          }, []); -->
  - If depenedcy array is [btnReactName] => useEffect is called everytime btnReactName is updated.
    <!-- -  useEffect(() => {
              console.log("useEffect Called");
          }, [btnReactName]);         -->

# 2 Types of Routing in web apps

    - Client Side Routing
    - Server Side Routing

# Optimizing Our App

    - Chunking
    - Code Splitting
    - Dynamic Bundling
    - Lazy Loading
    - On Demand Loading
    - Dynamic import

