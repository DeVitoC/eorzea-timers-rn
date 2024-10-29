import { Text, View } from 'dripsy';
import { memo, useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableButton } from 'app/features/components/TouchableButton/TouchableButton';
import { updateTime } from 'app/features/SharedHooks/useTime';
import { useRouter } from 'solito/router';

interface TimeDisplayProps {
  eorzeaTime: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = memo(({ eorzeaTime }) => {
  return <Text sx={styles.timeLabel}>{eorzeaTime}</Text>;
});

const SelectCategory: React.FC = () => {
  const [eorzeaTime, setEorzeaTime] = useState<string>('');
  const { push } = useRouter();

  const updateTimer = useCallback(() => {
    const currentEorzeaTime = updateTime();
    setEorzeaTime(currentEorzeaTime);
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTimer, 100);

    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = (selectedProfession: string) => {
    push(`/${selectedProfession}`);
  };

  return (
    <View sx={styles.container}>
      <Text style={styles.eorzeaLabel}>EORZEA TIME</Text>
      <TimeDisplay eorzeaTime={eorzeaTime} />
      <Text sx={styles.title}>Choost a Profession:</Text>
      <View style={styles.buttonContainer}>
        <TouchableButton
          title="BOTANY"
          onPress={() => handleButtonClick('botany')}
        />
        <TouchableButton
          title="MINING"
          onPress={() => handleButtonClick('mining')}
        />
        <TouchableButton
          title="FISHING"
          onPress={() => handleButtonClick('fishing')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '$backgroundWhite',
    paddingX: 16,
    paddingY: 40,
  },
  title: {
    fontSize: 30,
    marginTop: 100,
  },
  eorzeaLabel: {
    fontSize: 30,
  },
  timeLabel: {
    fontSize: 48,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
});

export default SelectCategory;
