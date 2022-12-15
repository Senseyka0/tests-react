import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Props {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<any, Props>(
	"login/loginByUsername",
	async ({ username, password }, thunkApi) => {
		const { rejectWithValue } = thunkApi;

		try {
			const response = await axios.post<any>("/login", {
				username,
				password,
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
