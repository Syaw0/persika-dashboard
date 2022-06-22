import create from "zustand"

const useStore = create((set , get)=>({
    currentTheme:"dark",
    isShowNav:false,
    setIsShowNav:()=>{
        set(state=>{return{...state , isShowNav:!state.isShowNav}})
    },
    setTheme:(value)=>{
        set(state=>{return{...state , currentTheme:value}})
    }
}))




export default useStore
