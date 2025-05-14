import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FaInfoCircle } from 'react-icons/fa';

export default function DateRangePicker({ afterDate, setAfterDate, beforeDate, setBeforeDate }) {
  return (
    <div className="flex justify-center gap-4 mt-4 flex-wrap">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-1 mb-1">
          <label className="text-sm font-medium text-gray-600">From date:</label>
          <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <FaInfoCircle className="text-gray-500 cursor-help hover:text-blue-500" />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="bg-black text-white text-xs rounded px-3 py-2 shadow-md max-w-xs z-50"
                >
                  Perplexity tries to prioritize sources in this range, but may include others if few are available.
                  <Tooltip.Arrow className="fill-black" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <DatePicker
          selected={afterDate}
          onChange={(date) => setAfterDate(date)}
          dateFormat="MM/dd/yyyy"
          className="border rounded px-3 py-2 text-sm w-40"
          placeholderText="MM/DD/YYYY"
        />
      </div>

      <div className="flex flex-col items-start">
        <label className="text-sm font-medium text-gray-600 mb-1">To date:</label>
        <DatePicker
          selected={beforeDate}
          onChange={(date) => setBeforeDate(date)}
          dateFormat="MM/dd/yyyy"
          className="border rounded px-3 py-2 text-sm w-40"
          placeholderText="MM/DD/YYYY"
        />
      </div>
    </div>
  );
}