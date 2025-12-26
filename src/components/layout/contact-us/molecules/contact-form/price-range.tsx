"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@src/utils/index"

interface RangeSliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  defaultValue?: [number, number]
  value: [number, number]
  min: number
  max: number
}

function RangeSlider({
  className,
  defaultValue = [0, 100],
  value,
  min = 0,
  max = 100,
  ...props
}: RangeSliderProps) {
  // ensure that we always have an array with two values
  const _values = React.useMemo(() => {
    if (value && Array.isArray(value)) return value
    if (Array.isArray(defaultValue)) return defaultValue
    return [min, max]
  }, [value, defaultValue, min, max])

  // function to format large values
  const formatValue = (val: number) => {
    if (val >= 1000000) {
      return `${(val / 1000000).toFixed(1)}M`
    }
    
    if (val >= 1000) {
      return `${(val / 1000).toFixed(0)}K`
    }

    return val.toString()
  }

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>

      {/* Renderize two thumbs */}
      {_values.map((thumbValue, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="slider-thumb"
          className="relative border-primary ring-ring/50 block h-4 w-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        >
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-primary text-white px-2 py-1 rounded text-xs whitespace-nowrap">
            {formatValue(thumbValue)}
          </div>
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  )
}

export default RangeSlider;