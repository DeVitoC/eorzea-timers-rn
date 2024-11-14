declare module 'app/features/components/SegmentedControl/SegmentedControl' {
  export interface SegmentedControlParams {
    title: string;
    index: number;
    values: string[];
    handleChange: (selectedIndex: number) => void;
  }

  const SegmentedControl: React.FC<SegmentedControlParams>;
  export default SegmentedControl;
}
