import { Admin, Resource, ListGuesser, fetchUtils } from "react-admin";
import { createHashHistory } from "history";
import { Provider } from "react-redux";
import adminStore from "./adminStore";
import simpleRestProvider from "ra-data-simple-rest";
import { BrowserRouter } from "react-router-dom";
import { useGetOne } from "react-admin";
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  const token = "Bearer " + localStorage.getItem("accessToken");
  options.headers.set("X-Custom-Header", "foobar");
  options.headers.set("Authorization", `Bearer ${token}`);
  //   options.user = {
  //     authenticated: true,
  //     token: "Bearer " + localStorage.getItem("accessToken"),
  //   };
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider("http://3.35.255.192:8081", httpClient);

const history = createHashHistory();
const authProvider = () => Promise.resolve();

const ReactAdmin = () => {
  const UserProfile = () => {
    const { data, error } = useGetOne("lectures", 30);
    console.log(data);
    if (error) {
      return <p>ERROR</p>;
    }
    return <div>{data?.content}</div>;
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
