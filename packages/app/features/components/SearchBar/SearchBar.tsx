import { Pressable, TextInput, View } from 'dripsy';
import { StyleSheet } from 'react-native';
import { MagnifyingGlass, XCircle } from '@nandorojo/heroicons/20/solid';

interface Props {
  searchText: string;
  setSearchText: (text: string) => void;
  handleChange: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({
  searchText,
  setSearchText,
  handleChange,
}) => {
  console.log(searchText);

  return (
    <View sx={styles.container}>
      <MagnifyingGlass color={'gray'} />
      <TextInput
        sx={styles.searchInput}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleChange} // Update search text
      />

      {searchText?.length > 0 && (
        <Pressable
          sx={{ position: 'absolute', right: 10 }}
          onPress={() => setSearchText('')}
        >
          <XCircle color={'gray'} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: '$inputBackground',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  searchInput: {
    height: 40,
    marginLeft: 6,
    width: '100%',
  },
  nodeText: {
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default SearchBar;
