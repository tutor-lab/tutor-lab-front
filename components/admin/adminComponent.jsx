import { Admin, Resource, fetchUtils, List, TextField } from "react-admin";
import { createHashHistory } from "history";
import { Provider } from "react-redux";
import adminStore from "./adminStore";
import simpleRestProvider from "ra-data-simple-rest";
import { BrowserRouter } from "react-router-dom";
import { useGetOne, useGetList } from "react-admin";
import styles from "./adminComponent.module.scss";
import Cors from "cors";
// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  res.set({
    "Access-Control-Expose-Headers": "Content-Range",
    "Content-Range": 0 - 24 / 319,
  });
}

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  const token = "Bearer " + localStorage.getItem("accessToken");
  options.headers.set("X-Custom-Header", "foobar");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(
  "http://3.35.255.192:8081",
  httpClient,
  handler
);

const history = createHashHistory();
const authProvider = () => Promise.resolve();

const ReactAdmin = () => {
  const UserProfile = (props) => {
    // const { data, error } = useGetOne("lectures", 30);
    const { data, error } = useGetList(
      "lectures",
      { page: 1, perPage: 10 },
      { field: "id", order: "DESC" }
    );
    console.log(data);
    if (error) {
      return (
        <p className={styles.error}>
          SORRY!
          <br /> THERE WAS PROBLEM WHILE LOADING
        </p>
      );
    }
    return (
      <div>{"hi"}</div>
      // <List {...props}>
      //   <>
      //     <TextField source="id" />
      //     <TextField source="title" />
      //     <TextField source="category" />
      //   </>
      // </List>
    );
  };

  return (
    <BrowserRouter>
      <Provider
        store={adminStore({
          authProvider,
          dataProvider,
          history,
        })}
      >
        <Admin
          authProvider={authProvider}
          dataProvider={dataProvider}
          history={history}
          title="My Admin"
        >
          <Resource name="lectures" list={UserProfile} />
          {/*tutors에서 제대로 받아오는지 확인용*/}
        </Admin>
      </Provider>
    </BrowserRouter>
  );
};

export default ReactAdmin;
