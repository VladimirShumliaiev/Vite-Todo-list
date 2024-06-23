
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'




// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// export const useAppStore: () => AppStore = useStore
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()