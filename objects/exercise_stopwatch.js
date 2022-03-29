class Stopwatch {
    constructor() {
        this.duration = 0;
        this.isRunning = false;

        this.start = function() {
            if(this.isRunning)
                throw Error("stopwatch is already running")

            this.startTime = Date.now();
            this.isRunning = true;
        };
        
        this.getDuration = function() { 
            if(this.isRunning) {
                console.log(this.duration + (Date.now()-this.startTime)/1000);
            } else {
                console.log(this.duration);
            }
        };

        this.stop = function() { 
            if(!this.isRunning)
                throw Error("stopwatch is already stopped")
            
            this.duration = this.duration + (Date.now()-this.startTime)/1000;
            this.isRunning = false; 
        };
        
        this.reset = function() {
            this.isRunning = false;
            this.duration = 0;
        }
    }
}

const sw = new Stopwatch()
