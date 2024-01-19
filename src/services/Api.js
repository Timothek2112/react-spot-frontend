import axios, { HttpStatusCode } from "axios";
import * as Config from "./ApiConfig";

class Api {
  static async get(address) {
    let token = localStorage.getItem("access-token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(Config.BASE_API_URL + address, config);
      return response;
    } catch (ex) {
      if (
        ex.response != null &&
        ex.response.status === HttpStatusCode.Unauthorized
      ) {
        console.log("REFRESH");
        if (await this.TryRefreshToken(localStorage.getItem("refresh-token"))) {
          let token = localStorage.getItem("access-token");
          config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(
            Config.BASE_API_URL + address,
            config
          );
          return response;
        }
      } else {
        console.log(ex);
        throw ex;
      }
    }
  }

  static async post(address, data) {
    let token = localStorage.getItem("access-token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        Config.BASE_API_URL + address,
        data,
        config
      );
      return response;
    } catch (ex) {
      console.log(ex);
      if (
        ex.response != null &&
        ex.response.status === HttpStatusCode.Unauthorized
      ) {
        if (await this.TryRefreshToken(localStorage.getItem("refresh-token"))) {
          let token = localStorage.getItem("access-token");
          config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.post(
            Config.BASE_API_URL + address,
            data,
            config
          );
          return response;
        }
      } else {
        throw ex;
      }
    }
  }

  static async put(address, data) {
    let token = localStorage.getItem("access-token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.put(
        Config.BASE_API_URL + address,
        data,
        config
      );
      return response;
    } catch (ex) {
      console.log(ex);
      if (
        ex.response != null &&
        ex.response.status === HttpStatusCode.Unauthorized
      ) {
        if (await this.TryRefreshToken(localStorage.getItem("refresh-token"))) {
          let token = localStorage.getItem("access-token");
          config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.put(
            Config.BASE_API_URL + address,
            data,
            config
          );
          return response;
        }
      } else {
        throw ex;
      }
    }
  }

  static async Delete(address) {
    let token = localStorage.getItem("access-token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.delete(
        Config.BASE_API_URL + address,
        config
      );
      return response;
    } catch (ex) {
      console.log(ex);
      if (
        ex.response != null &&
        ex.response.status === HttpStatusCode.Unauthorized
      ) {
        if (await this.TryRefreshToken(localStorage.getItem("refresh-token"))) {
          let token = localStorage.getItem("access-token");
          config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.delete(
            Config.BASE_API_URL + address,
            config
          );
          return response;
        }
      } else {
        throw ex;
      }
    }
  }

  static async TryRefreshToken(refreshToken) {
    const token = localStorage.getItem("refresh-token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        Config.BASE_API_URL + "users/refresh",
        null,
        config
      );

      localStorage.setItem("access-token", response.data.access);
      localStorage.setItem("refresh-token", response.data.refresh);
      return true;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }
}

export default Api;
