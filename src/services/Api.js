import axios, { HttpStatusCode } from "axios";

class Api {
  static async get(address) {
    let token = localStorage.getItem("access-token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        "http://109.174.29.40:15009/" + address,
        config
      );
      return response;
    } catch (ex) {
      if (ex.response.status === HttpStatusCode.Unauthorized) {
        if (await this.TryRefreshToken(localStorage.getItem("refresh-token"))) {
          const response = await axios.get(
            "http://109.174.29.40:15009/" + address,
            config
          );
          return response;
        }
      } else {
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
        "http://109.174.29.40:15009/" + address,
        data,
        config
      );
      return response;
    } catch (ex) {
      if (ex.response.status === HttpStatusCode.Unauthorized) {
        if (this.TryRefreshToken(localStorage.getItem("refresh-token"))) {
          const response = await axios.post(
            "http://109.174.29.40:15009/" + address,
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
        "http://109.174.29.40:15009/" + address,
        data,
        config
      );
      return response;
    } catch (ex) {
      if (ex.response.status === HttpStatusCode.Unauthorized) {
        if (this.TryRefreshToken(localStorage.getItem("refresh-token"))) {
          const response = await axios.put(
            "http://109.174.29.40:15009/" + address,
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

  static async TryRefreshToken(refreshToken) {
    const token = localStorage.getItem("refresh-token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        "http://109.174.29.40:15009/users/refresh",
        null,
        config
      );
      if (response.status == HttpStatusCode.Ok) {
        localStorage.setItem("access-token", response.data.access);
        localStorage.setItem("refresh-token", response.data.refresh);
        return true;
      }
      return false;
    } catch (ex) {
      return false;
    }
  }
}

export default Api;
