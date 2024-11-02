import { useEffect, useState } from 'react';
import { FlatList, View } from 'dripsy';
import { Node } from 'app/features/SelectNode/SelectNodeTypes';
import { useRouter } from 'solito/router';
import Header from 'app/features/components/Header/Header';
import SegmentedControl from 'app/features/components/SegmentedControl/SegmentedControl';
import SearchBar from 'app/features/components/SearchBar/SearchBar';

interface SelectNodesProps {
  profession: string;
}

const SelectNode: React.FC<SelectNodesProps> = ({ profession }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [expacIndex, setExpacIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);
  const { push } = useRouter();

  const handleSelectExpac = (expac: number) => {
    if (expac <= 0 || expac > 6) {
      setExpacIndex(0);
    } else {
      setExpacIndex(expac);
    }
  };

  const handleSelectSort = (sort: number) => {
    if (sort <= 0 || sort > 2) {
      setSortIndex(0);
    } else {
      setSortIndex(sort);
    }
  };

  return (
    <View
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '$backgroundWhite',
        paddingX: 16,
      }}
    >
      {/* Header */}
      <Header />

      {/* Expansion Selection */}
      <SegmentedControl
        title={'Expac:'}
        index={expacIndex}
        handleChange={(newIndex) => handleSelectExpac(newIndex)}
        values={['All', 'ARR', 'HW', 'SB', 'ShB', 'EW', 'DT']}
      />

      {/* Sort Selection */}
      <SegmentedControl
        title={'Sort By:'}
        index={sortIndex}
        handleChange={(newIndex) => handleSelectSort(newIndex)}
        values={['NAME', 'TIME', 'ZONE']}
      />

      <SearchBar handleChange={(text) => handleSearchText(text)} />
      <View
        sx={{
          height: 1,
          width: '100%',
          backgroundColor: '$lightGray',
          marginY: 6,
        }}
      />

      />
    </View>
  );
};

export default SelectNode;
