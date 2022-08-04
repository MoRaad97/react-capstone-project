import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
// Actions
const LOAD_DATA = 'react-capstone-project/mainReducer/LOAD_DATA';

// create ASYNC Thunks
export const loadDataThunk = createAsyncThunk(LOAD_DATA, async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all').catch((err) => {
    console.log('Error', err);
  });
  const res = response.data;
  return res;
});

const DataSlice = createSlice({
  name: 'react-capstone-project/mainReducer',
  initialState: [],
  extraReducers: {
    [loadDataThunk.fulfilled]: (state, action) => {
      const newState = action.payload.map((object) => {
        const loadedLanguages = []
        for (const key in object.languages) {
          loadedLanguages.push(object.languages[key]);
        }
        return ({
          id: uuid(),
          name: object.name.common,
          population: object.population,
          image: object.flags.png,
          region: object.region,
          capital: object.capital,
          nativeName: object.nativeName,
          subregion: object.subregion,
          tld: object.tld,
          languages: loadedLanguages.toString(),
          latlng: `[${object.latlng}]`,
        })
      });
      return newState;
    },
  },
});

export const dataReducer = DataSlice.actions;
export default DataSlice.reducer;
