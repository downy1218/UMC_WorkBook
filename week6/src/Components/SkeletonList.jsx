import Skeleton from "./Skeleton";

const SkeletonList = ()=>{
    return(
        new Array(20).fill(0).map((_,index)=>(<Skeleton/>))
    )
}
export default SkeletonList;