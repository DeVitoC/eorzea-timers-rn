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
  currentNodes: Node[];
}

const SelectNode: React.FC<SelectNodesProps> = ({ profession }) => {
  const nodeList = (
    profession === 'botany'
      ? require('app/features/Data/botany.json')
      : profession === 'mining'
      ? require('app/features/Data/mining.json')
      : require('app/features/Data/fishing.json')
  ).sort((a: Node, b: Node) => {
    return a.name.localeCompare(b.name);
  });
  const [settings, setSettings] = useState<Settings>({
    searchText: '',
    expacIndex: 0,
    sortIndex: 0,
    currentNodes: nodeList,
  });
  const [sortIndex, setSortIndex] = useState(0);
  const { push } = useRouter();

  const handleSelectExpac = (expac: number, nodes: Node[]): Node[] => {
    if (expac <= 0 || expac > 6) {
      return nodes;
    } else {
      return nodes.filter((node: Node) => node.expac === expac - 1);
    }
  };

  const handleSearchText = (text: string, nodes: Node[]): Node[] => {
    var searchResults = nodes.filter((node: Node) => {
      return (
        node.name.toLowerCase().includes(text.toLowerCase()) ||
        node.description.toLowerCase().includes(text.toLowerCase())
      );
    });
    return searchResults;
  };

  const handleSelectSort = (sort: number) => {
    if (sort <= 0 || sort > 2) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        sortIndex: 0,
        currentNodes: nodeList,
      }));
    } else {
      setSortIndex(sort);
    }
  };

  const handleSortAndSearch = (updates: Partial<Settings>) => {
    const newSettings = {
      ...settings,
      ...updates,
    };
    const { expacIndex, sortIndex, searchText } = newSettings;
    var nodes = nodeList;

    // filter by expac
    nodes = handleSelectExpac(expacIndex, nodes);

    // filter by search Text
    if (!!searchText) {
      nodes = handleSearchText(searchText, nodes);
    }

    setSettings({
      expacIndex: expacIndex,
      sortIndex: sortIndex,
      searchText: searchText,
      currentNodes: nodes,
    });
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
          index={settings.expacIndex}
          handleChange={(newIndex) =>
            handleSortAndSearch({ expacIndex: newIndex })
          }
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
            index={settings.sortIndex}
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
      <SearchBar
        handleChange={(text) => handleSortAndSearch({ searchText: text })}
      />
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
        data={settings.currentNodes}
        renderItem={({ item }) => <SelectNodeRow node={item as Node} />}
        keyExtractor={(item: Node, index: number) => `${item.name}-${index}`}
      />
    </View>
  );
};

export default SelectNode;
