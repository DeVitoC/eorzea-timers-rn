import { useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'dripsy';
import { Node } from 'app/features/SelectNode/selectNodeRowTypes';
import { useRouter } from 'solito/router';
import Header from 'app/features/components/Header/Header';
import SegmentedControl from 'app/features/components/SegmentedControl/SegmentedControl';
import SearchBar from 'app/features/components/SearchBar/SearchBar';
import { Cog6Tooth } from '@nandorojo/heroicons/24/solid';
import SelectNodeRow from 'app/features/SelectNode/SelectNodeRow';

interface SelectNodesProps {
  profession: 'botany' | 'mining' | 'fishing';
}

interface Settings {
  searchText: string;
  expacIndex: number;
  sortIndex: number;
}

const SelectNode: React.FC<SelectNodesProps> = ({ profession }) => {
  const nodeList =
    profession === 'botany'
      ? require('app/features/Data/botany.json')
      : profession === 'mining'
      ? require('app/features/Data/mining.json')
      : require('app/features/Data/fishing.json');
  const [settings, setSettings] = useState<Settings>({
    searchText: '',
    expacIndex: 0,
    sortIndex: 0,
  });
  const [currentNodes, setCurrentNodes] = useState<Node[]>(nodeList);
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

  const handleSearchText = (text: string) => {
    var nodes = nodeList.filter((node: Node) => {
      return (
        node.name.toLowerCase().includes(text.toLowerCase()) ||
        node.description.toLowerCase().includes(text.toLowerCase())
      );
    });
    setCurrentNodes(nodes);
    setSettings((prevSettings) => ({
      ...prevSettings,
      searchText: text,
    }));
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
      <View sx={{ marginTop: 16 }}>
        <SegmentedControl
          title={'Expac:'}
          index={expacIndex}
          handleChange={(newIndex) => handleSelectExpac(newIndex)}
          values={['All', 'ARR', 'HW', 'SB', 'ShB', 'EW', 'DT']}
        />
      </View>

      {/* Sort and filter Selection */}
      <View
        sx={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <View sx={{ width: '80%' }}>
          <SegmentedControl
            title={'Sort By:'}
            index={sortIndex}
            handleChange={(newIndex) => handleSelectSort(newIndex)}
            values={['NAME', 'TIME', 'ZONE']}
          />
        </View>
        <Pressable onPress={() => {}}>
          <Cog6Tooth color="#666" />
        </Pressable>
      </View>

      <View
        sx={{
          height: 1,
          width: '100%',
          backgroundColor: '$lightGray',
          marginY: 6,
        }}
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

      {/* Nodes List */}
      <FlatList
        data={currentNodes}
        renderItem={({ item }) => <SelectNodeRow node={item as Node} />}
        keyExtractor={(item: Node, index: number) => `${item.name}-${index}`}
      />
    </View>
  );
};

export default SelectNode;
