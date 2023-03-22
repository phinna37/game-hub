// import useData from "./useData";
import platforms from "../data/platforms"

interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatform = () => useData<Platform>('/platforms/lists/parents')
const usePlatform = () =>({data: platforms, isLoading: false, error: null})

export default usePlatform;