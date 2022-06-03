import { API_FETCH_ALBUMS, API_FETCH_USERS } from './../../apis/index'
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
  users: {
    id?: number
    name?: string
    username?: string
    email?: string
    address?: {
      street?: string
      suite?: string
      city?: string
      zipcode?: string
      geo?: {
        lat?: string
        lng?: string
      }
    }
    phone?: string
    website?: string
    company?: {
      name?: string
      catchPhrase?: string
      bs?: string
    }
  }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
}

const initialState: CounterState = {
  value: 0,
  listAlbums: [],
  loading: false,
  users: [],
  error: null
}

export const fetchAlbums = createAsyncThunk('dashboardSlice/fetchAlbums', async () => {
  return await request(API_FETCH_ALBUMS, 'GET')
})

export const fetchUsers = createAsyncThunk('dashboardSlice/fetchUsers', async () => {
  return await request(API_FETCH_USERS, 'GET')
})

export const fetchAll = createAsyncThunk('dashboardSlice/fetchAll', async (_, { dispatch }) => {
  return Promise.all([dispatch(fetchAlbums()), dispatch(fetchUsers())])
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
  extraReducers: {
    // ALBUMS
    [fetchAlbums.pending.toString()]: state => {
      state.listAlbums = []
    },
    [fetchAlbums.fulfilled.toString()]: (state, { payload }) => {
      state.listAlbums = payload
    },
    [fetchAlbums.rejected.toString()]: (state, { error }) => {
      state.error = error
    },
    // USERS
    [fetchUsers.pending.toString()]: state => {
      state.users = []
    },
    [fetchUsers.fulfilled.toString()]: (state, { payload }) => {
      state.users = payload
    },
    [fetchUsers.rejected.toString()]: (state, { error }) => {
      state.error = error
    },
    // ALL
    [fetchAll.pending.toString()]: state => {
      state.loading = true
    },
    [fetchAll.fulfilled.toString()]: state => {
      state.loading = false
    },
    [fetchAll.rejected.toString()]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = demoSlice.actions

export default demoSlice.reducer
