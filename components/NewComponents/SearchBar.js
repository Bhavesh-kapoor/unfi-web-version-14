import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <SearchIcon color="action" style={{ margin: "0.5rem" }} />
            ),
          }}
        />
      </FormControl>
    </div>
  );
};

export default SearchBar;
