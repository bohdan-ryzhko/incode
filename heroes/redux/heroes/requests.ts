import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { AdditionalInfo, People } from "../../d";

export const fetchPeople = createAsyncThunk<People, number>(
  'heroes/fetchPeople',
  async (page, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<People> = await axios.get(`people/?page=${page}`);
      return response.data;
    } catch (error) {
      console.warn(error);
      return rejectWithValue(error);
    }
  },
);

export const fetchHomeWorld = createAsyncThunk<AdditionalInfo, string>(
  'heroes/fetchHomeWorld',
  async (point, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<AdditionalInfo> = await axios.get(point);
      return response.data;
    } catch (error) {
      console.warn(error);
      return rejectWithValue(error);
    }
  },
);

export const fetchSpecies = createAsyncThunk<AdditionalInfo, string>(
  'heroes/fetchSpices',
  async (point, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<AdditionalInfo> = await axios.get(point);
      return response.data;
    } catch (error) {
      console.warn(error);
      return rejectWithValue(error);
    }
  },
);
