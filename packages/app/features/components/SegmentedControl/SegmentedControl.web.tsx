import { Text, View } from 'dripsy';
import { StyleSheet } from 'react-native';
import { SegmentedControl as SegmentedControlWeb } from 'segmented-control';
import { SegmentedControlParams } from 'app/features/components/SegmentedControl/SegmentedControl';

interface Option {
  label: string;
  value: number;
  disabled: boolean;
  default: boolean;
}

const SegmentedControl: React.FC<SegmentedControlParams> = ({
  title,
  index,
  values,
  handleChange,
}) => {
  const options: Option[] = values.map((value, indexNum) => ({
    label: value.toUpperCase(),
    value: indexNum,
    disabled: indexNum !== index,
    default: indexNum === 0,
  }));
  return (
    <View sx={styles.container}>
      <Text sx={styles.label}>{title}</Text>
      <SegmentedControlWeb
        name="oneDisabled"
        options={options}
        setValue={(value) => handleChange(value)}
        // onChange={(event) =>
        //   handleChange(event.nativeEvent.selectedSegmentIndex)
        // }
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
