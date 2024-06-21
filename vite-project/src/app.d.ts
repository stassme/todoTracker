declare global {
    declare type RootState = import('@/1-App/store/index').RootState
    declare type AppDispatch = import('@/1-App/store/index').AppDispatch
}

export {}