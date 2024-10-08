import module from "./SearchBox.module.css";

const SearchBox = ({ setSearchValue, searchValue }) => {

    const handleChange = (evt) => {
        setSearchValue(evt.target.value);
    };

    return (
        <label className={module.label}>
            <span>Find contacts by name</span>
            <input value={searchValue} className={module.input} type="text" name="name" onChange={handleChange} />
        </label>
    )
}

export default SearchBox