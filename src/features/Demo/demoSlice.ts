import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { request } from '../../utils/request'

export interface CounterState {
  value: number
  listAlbums: {
    userId: number
    id: number
    title: string
  }[]
}

const initialState: CounterState = {
  value: 0,
  listAlbums: []
}

export const fetchAlbums = createAsyncThunk('dashboardSlice/fetchAlbums', async () => {
  return await request('/albums', 'GET')
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
