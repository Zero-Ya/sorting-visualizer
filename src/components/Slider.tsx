
type sliderProps = {
  labelData: string,
  data: number,
  setData: (data: number) => void,
  isSorting: boolean
}

const Slider = ({ labelData, data, setData, isSorting }: sliderProps) => {
  const minValue = (labelData === 'Delay' ? 1 : 5);
  const maxValue = (labelData === 'Delay' ? 1000 : 400);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData(parseInt(e.target.value));
  }

  return (
    <div className="flex flex-col items-center">
      <label>{labelData}: {data}</label>
      <input
        className="w-4/5"
        type="range"
        min={minValue}
        max={maxValue}
        value={data}
        onChange={handleChange}
        disabled={isSorting}
      />
    </div>
  )
}

export default Slider