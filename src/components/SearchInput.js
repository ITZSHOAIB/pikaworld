function SearchInput(props) {
  return (
    <input
      type="text"
      className="rounded-full placeholder:text-center placeholder:italic focus:outline-none px-4 py-2 focus:placeholder:text-white/60 w-full max-w-md h-8 text-white/60 border-b-2 border-white/80 bg-transparent mb-5"
      placeholder="Enter your Pokemon name"
      onKeyPress={props.handleKeyPress}
    />
  );
}

export default SearchInput;
