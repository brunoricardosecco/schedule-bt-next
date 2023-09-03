import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { Fragment, useRef, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Schedules() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const newDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });
  const weekDays = eachDayOfInterval({
    start: add(selectedDay, { days: -3 }),
    end: add(selectedDay, { days: 3 }),
  });

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };
  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };
  const handleSelectNextDay = () => {
    const newSelectedDay = add(selectedDay, { days: 1 });
    const newSelectedMonth = format(newSelectedDay, "MMM-yyyy");
    setSelectedDay(newSelectedDay);

    if (currentMonth !== newSelectedMonth) {
      setCurrentMonth(newSelectedMonth);
    }
  };
  const handleSelectPreviousDay = () => {
    const newSelectedDay = add(selectedDay, { days: -1 });
    const newSelectedMonth = format(newSelectedDay, "MMM-yyyy");
    setSelectedDay(newSelectedDay);

    if (currentMonth !== newSelectedMonth) {
      setCurrentMonth(newSelectedMonth);
    }
  };
  const handleSelectToday = () => {
    const todayMonth = format(today, "MMM-yyyy");
    setSelectedDay(today);

    if (currentMonth !== todayMonth) {
      setCurrentMonth(todayMonth);
    }
  };

  const getWorkHourIntervals = () => {
    const startTime = "08:00";
    const endTime = "21:00";
    const reservationTimeInMinutes = 60;
    const startTimeDate = parse(startTime, "HH:mm", new Date());
    const endTimeDate = parse(endTime, "HH:mm", new Date());
    const intervals = [];
    let currentTime = startTimeDate;

    while (
      isBefore(currentTime, endTimeDate) ||
      isEqual(currentTime, endTimeDate)
    ) {
      intervals.push(currentTime);

      currentTime = add(currentTime, { minutes: reservationTimeInMinutes });
    }

    return intervals;
  };

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <div>
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            <time dateTime="2022-01-22" className="sm:hidden">
              {format(selectedDay, "dd MMM yyyy", { locale: ptBR })}
            </time>
            <time dateTime="2022-01-22" className="hidden sm:inline">
              {format(selectedDay, "dd MMMM yyyy", { locale: ptBR })}
            </time>
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {format(selectedDay, "EEEE", { locale: ptBR })}
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
              onClick={handleSelectPreviousDay}
            >
              <span className="sr-only">Dia anterior</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
              onClick={handleSelectToday}
            >
              Hoje
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
              onClick={handleSelectNextDay}
            >
              <span className="sr-only">Próximo dia</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="mx-3 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Nova reserva
            </button>
          </div>
          <div className="relative ml-6 md:hidden">
            <button className="-mx-2 flex items-center border border-transparent p-2 text-white bg-indigo-600 h-9 rounded-md">
              <span className="sr-only">Open menu</span>
              <PlusIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <div className="isolate flex flex-auto overflow-hidden bg-white">
        <div ref={container} className="flex flex-auto flex-col overflow-auto">
          <div
            ref={containerNav}
            className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
          >
            {weekDays.map((day) => (
              <button
                key={day.toString()}
                type="button"
                className="flex flex-col items-center pb-1.5 pt-3"
              >
                <span>{format(day, "EEEEE", { locale: ptBR })}</span>
                {/* Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" */}
                <span
                  className={classNames(
                    "mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold ",
                    isSameDay(selectedDay, day)
                      ? "text-white rounded-full bg-gray-900"
                      : "text-gray-900",
                    isSameDay(today, day) &&
                      isSameDay(selectedDay, day) &&
                      "bg-indigo-600",
                    !isSameDay(selectedDay, day) &&
                      isSameDay(today, day) &&
                      "text-indigo-600",
                  )}
                >
                  {format(day, "dd")}
                </span>
              </button>
            ))}
          </div>
          <div className="flex w-full flex-auto">
            <div className="w-14 flex-none bg-white" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{
                  gridTemplateRows: `repeat(${
                    getWorkHourIntervals().length - 1
                  }, minmax(5rem, 1fr))`,
                }}
              >
                <div ref={containerOffset} className="row-end-1 h-7"></div>
                {getWorkHourIntervals().map((workHour) => (
                  <div key={workHour.toString()}>
                    <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      {format(workHour, "HH:mm")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
                style={{
                  gridTemplateRows: `1.86rem repeat(${
                    getWorkHourIntervals().length * 20
                  }, minmax(0, 1fr)) auto`,
                }}
              >
                <li
                  className="relative mt-px flex"
                  style={{ gridRow: "2 / 23rem" }}
                >
                  <button className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100">
                    <p className="order-1 font-semibold text-blue-700">Bruno</p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                      <time dateTime="2022-01-22T06:00">6:00 AM</time>
                    </p>
                  </button>
                </li>
                <li
                  className="relative mt-px flex"
                  style={{ gridRow: "23 / span 21" }}
                >
                  <button className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100">
                    <p className="order-1 font-semibold text-pink-700">Guara</p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-01-22T07:30">7:30 AM</time>
                    </p>
                  </button>
                </li>
                <li
                  className="relative mt-px flex"
                  style={{ gridRow: "44 / span 21" }}
                >
                  <button className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100">
                    <p className="order-1 font-semibold text-indigo-700">
                      Abelito
                    </p>
                    <p className="text-indigo-500 group-hover:text-indigo-700">
                      <time dateTime="2022-01-22T11:00">11:00 AM</time>
                    </p>
                  </button>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 max-w-md flex-none border-l border-gray-100 px-8 py-10 md:block">
          <div className="flex items-center text-center text-gray-900">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              onClick={previousMonth}
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex-auto text-sm font-semibold">
              {format(firstDayCurrentMonth, "MMMM yyyy", { locale: ptBR })}
            </div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              onClick={nextMonth}
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200 overflow-hidden">
            {newDays.map((day, dayIdx) => (
              <button
                key={day.toString()}
                type="button"
                className={classNames(
                  "py-1.5 hover:bg-gray-100 focus:z-10",
                  isSameMonth(day, firstDayCurrentMonth)
                    ? "bg-white"
                    : "bg-gray-50",
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  isEqual(day, selectedDay) && "text-white",
                  !isEqual(day, selectedDay) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    !isToday(day) &&
                    "text-gray-900",
                  !isEqual(day, selectedDay) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    !isToday(day) &&
                    "text-gray-400",
                  isToday(day) &&
                    !isEqual(day, selectedDay) &&
                    "text-indigo-600",
                  dayIdx === 0 && colStartClasses[getDay(day)],
                )}
                onClick={() => setSelectedDay(day)}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className={classNames(
                    "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                    isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "bg-indigo-600",
                    isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
                  )}
                >
                  {format(day, "d")}
                </time>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
