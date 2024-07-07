"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<any>();
export const useAppSelector = useSelector.withTypes<any>();
