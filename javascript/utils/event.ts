class DispatcherEvent {
    eventName: string;
    callbacks: Function[];
    constructor(eventName: string) {
        this.eventName = eventName;
        this.callbacks = [];
    }
    registerCallback(callback: Function) {
        this.callbacks.push(callback);
    }
    unregisterCallback(callback: Function) {
        const index = this.callbacks.indexOf(callback);
        if (index > -1) {
            this.callbacks.splice(index, 1);
        }
    }
    fire(data: any) {
        const callbacks = this.callbacks.slice(0);
        callbacks.forEach((callback) => {
            callback(data);
        });
    }
}

class Dispatcher {
    private events: {
        [key: string]: DispatcherEvent
    };

    constructor() {
        this.events = {};
    }
    dispatch(eventName: string, data: any) {
        const event = this.events[eventName];
        if (event) {
            event.fire(data);
        }
    }
    on(eventName: string, callback: Function) {
        let event = this.events[eventName];
        if (!event) {
            event = new DispatcherEvent(eventName);
            this.events[eventName] = event;
        }
        event.registerCallback(callback);
    }
    off(eventName: string, callback: Function) {
        const event = this.events[eventName];
        if (event && event.callbacks.indexOf(callback) > -1) {
            event.unregisterCallback(callback);
            if (event.callbacks.length === 0) {
                delete this.events[eventName];
            }
        }
    }
}