import { API_FETCH_ALBUMS } from './../../apis/index'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { request } from 'utils/request'

export interface CounterState {
  value: number
  listAlbums: {
    userId: number
    id: number
    title: string
  }[]
  loading: boolean
}

const initialState: CounterState = {
  value: 0,
  listAlbums: [],
  loading: false
}

export const fetchAlbums = createAsyncThunk('dashboardSlice/fetchAlbums', async () => {
  return await request(API_FETCH_ALBUMS, 'GET')
})

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchAlbums.pending, state => {
      return { ...state, loading: true, listAlbums: [] }
    }),
      builder.addCase(fetchAlbums.fulfilled, (state, { payload }) => {
        return { ...state, loading: false, listAlbums: payload }
      }),
      builder.addCase(fetchAlbums.rejected, (state, { payload }) => {
        return { ...state, loading: false, error: payload }
      })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = demoSlice.actions

export default demoSlice.reducer
