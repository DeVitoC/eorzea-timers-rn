import { Text, View } from 'dripsy';
import { StyleSheet } from 'react-native';
import SegmentedControlRN from '@react-native-segmented-control/segmented-control';

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
  return (
    <View sx={styles.container}>
      <Text sx={styles.label}>
        {title}
      </Text>
      <SegmentedControlRN
        values={values}
        selectedIndex={index}
        onChange={(event) =>
          handleChange(event.nativeEvent.selectedSegmentIndex)
        }
        style={styles.segmentedControl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 18,
  },
  segmentedControl: {
    marginLeft: 6,
    width: 'auto',
    flexGrow: 1,
  },
});

export default SegmentedControl;
