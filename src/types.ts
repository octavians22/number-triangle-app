export interface NumberInputProps {
    onNumberChange: (num: number) => void;
  }
  
  export interface NumberListProps {
    numbers: number[];
  }

  export interface NumberInputPropsForTriangle {
    label: string;
    onNumberChange: (num: number) => void;
  }
  
  export interface TriangleAreaProps {
    height: number;
    width: number;
  }