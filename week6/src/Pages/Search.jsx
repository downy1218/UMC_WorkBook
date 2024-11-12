import * as S from '../Styles/SearchStyle';

function SearchPage() {
    return (
        <>
            <S.Container>
                <S.SearchInput placeholder='검색어를 입력하세요..' />
                <span><S.SearchBtn>검색</S.SearchBtn></span>
            </S.Container>
        </>


    )
}
export default SearchPage;