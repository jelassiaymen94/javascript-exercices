/* In this exercise, you need to implement the createEE function which creates an EventEmitter instance capable of emitting data at a defined interval
createEE takes as input opts, an object. opts contains the following properties
opts.fn: a synchronous function. The output of the function should be emitted with the data event.
opts.interval: the interval, in milliseconds, between data events

opts.signal: an AbortSignal object to use to emit a close event and stop emitting data
Notes:
If an error occurs while calling the fn function, the error should be emitted with the error event.
The first event should be emitted immediately after the EventEmitter is created. */

function createEE(opts) {
	const ee = new EventEmitter();
	let intervalId = setInterval(() => {
		try {
			ee.emit("data", opts.fn());
		} catch (e) {
			ee.emit("error", e);
		}
	}, opts.interval);

	opts.signal.addEventListener("abort", () => {
		clearInterval(intervalId);
		ee.emit("close");
	});

	return ee;
}
