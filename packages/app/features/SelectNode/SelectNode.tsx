import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'dripsy';
import {
  Node,
  Profession,
  GatheringNodeController,
} from 'app/features/SelectNode/SelectNodeTypes';
import { ChevronLeft } from '@nandorojo/heroicons/24/solid';

const SelectNode = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [searchText, setSearchText] = useState('');

  return (
    <View sx={{ width: '100%', height: '100%' }}>
      {/* Header Row */}
      <Pressable
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View sx={{ flexDirection: 'row' }}>
          <ChevronLeft />
          <Text sx={{ fontSize: 16, fontWeight: 'bold' }}>Back</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SelectNode;
