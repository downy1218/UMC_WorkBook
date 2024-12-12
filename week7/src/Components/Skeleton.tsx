import * as S from '../Styles/SkeletonStyle';

const Skeleton = ()=>{
    return(
        <S.Skeleton>
            <S.SkeletonPoster></S.SkeletonPoster>
            <S.TitleBox>
                <S.Title/>
                <S.Date/>
            </S.TitleBox>
        </S.Skeleton>
    )
}

export default Skeleton;