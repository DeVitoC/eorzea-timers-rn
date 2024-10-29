import { Text, View } from 'dripsy';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import SegmentedControlRN from '@react-native-segmented-control/segmented-control';
import { useDevice } from 'app/provider/device';

interface SegmentedControlParams {
  title: string;
  index: number;
  values: string[];
  handleChange: (selectedIndex: number) => void;
}

const SegmentedControl: React.FC<SegmentedControlParams> = ({
  title,
  index,
  values,
  handleChange,
}) => {
  const [textWidth, setTextWidth] = useState<number>(0);
  const { width } = useDevice();

  const handleTextLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setTextWidth(width);
  };

  const segmentedControlWidth = textWidth ? width - 32 - textWidth : '80%';

  return (
    <View sx={styles.container}>
      <Text sx={styles.label} onLayout={handleTextLayout}>
        {title}
      </Text>
      <SegmentedControlRN
        values={values}
        selectedIndex={index}
        onChange={(event) =>
          handleChange(event.nativeEvent.selectedSegmentIndex)
        }
        style={[
          styles.segmentedControl,
          { width: segmentedControlWidth },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  label: {
    fontSize: 18,
  },
  segmentedControl: {
    marginLeft: 6,
  },
});

export default SegmentedControl;
