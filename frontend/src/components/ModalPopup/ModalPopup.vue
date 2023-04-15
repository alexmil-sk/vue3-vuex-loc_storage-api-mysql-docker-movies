
<template>
  <div class="modal-backdrop">
    <div class="modal-window" role="dialog">
      <button
        type="button"
        class="btn-close"
        @click="close"
        aria-label="Close modal"
      >
        &times;
      </button>
      <section class="modal-body-1">
        <label for="number-1">Start the range of movies</label>
        <input
          id="modalNumberStart"
          type="number"
          placeholder="From 1 to 85"
          v-model="startNumber"
          min="1"
          max="85"
        />
      </section>
      <section class="modal-body-2">
        <label for="modalNumberEnd">End the range of movies</label>
        <input
					@keypress.enter="go"
          id="modalNumberEnd"
          type="number"
          placeholder="From 2 to 86"
          v-model="endNumber"
          min="2"
          max="86"
        />
      </section>
      <button type="button" class="btn-go" @click="go" aria-label="Close modal">
        GO!
      </button>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
	name: "ModalPopup",
  data() {
    return {
      startNumber: this.modalNumberStart,
      endNumber: this.modalNumberEnd,
    };
  },
	methods: {

		...mapMutations('films', ['closeModalPopup', 'goModalPopup']),
		...mapActions('films', ['fetchMoviesAsync']),
		close() {
			this.closeModalPopup();
    },
    go() {
      if (this.startNumber == null || this.endNumber == null) {
        this.$toast.show("<h3>All fields must be filled!</h3>", {
          type: "error",
        });
      } else if (this.startNumber <= 0 || this.endNumber <= 0) {
        this.$toast.show("<h3>The numbers must be greater than zero!</h3>", {
          type: "error",
        });
      } else if (this.startNumber > 85 || this.endNumber > 86) {
        this.$toast.show(
          "<h3>You have exceeded the maximum values of the numbers!</h3>",
          {
            type: "error",
          }
        );
      } else if (this.startNumber >= this.endNumber) {
        this.$toast.show(
          "<h3>The initial value cannot be greater than or equal to the final value of the range!</h3>",
          {
            type: "error",
          }
        );
			} else {
				
				this.goModalPopup();

        this.$toast.show("<h3>Loading is in progress...</h3>", {
          type: "info",
        });

        setTimeout(async () => {
          try {
            this.fetchMoviesAsync({start: this.startNumber, end: this.endNumber});

            this.$toast.show("<h3>Movies were loaded!</h3>", {
              type: "success",
            });
          } catch (err) {
            this.$toast.show(`<h3>Server returns error: ${err}</h3>`, {
              type: "error",
            });
          }
        }, 3000);
      }
    },
	},
	computed: {
		...mapGetters('films', ['modalNumberStart', 'modalNumberEnd'])
	}
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 100;
}

.modal-window {
  position: relative;
  background: rgba(241, 251, 249, 0.8);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid #fff;
  box-shadow: 0 0 20px 10px rgba(74, 174, 155, 1);
  margin-top: 140px;
  z-index: 101;
}

.modal-body-1,
.modal-body-2 {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
}

.modal-body-1 label,
.modal-body-2 label {
  margin-bottom: 5px;
}

.modal-body-1 input,
.modal-body-2 input {
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 2px 5px;
}

.btn-close {
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border: 1px solid rgba(238, 106, 106, 1);
  background: rgba(238, 106, 106, 1);
  transition: 600ms;
}

.btn-close:hover {
  background: rgba(242, 14, 14, 1);
  transition: 600ms;
}
.btn-close:active {
  background: rgba(238, 106, 106, 1);
  box-shadow: inset 0 0 2px 2px rgba(255, 255, 255, 0.2);
  transition: 100ms;
}

.btn-go {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  transition: 600ms;
}
.btn-go:hover {
  background: rgba(63, 147, 132, 0.99);
  transition: 600ms;
}
.btn-go:active {
  background: #4aae9b;
  box-shadow: inset 0 0 10px 5px rgba(255, 255, 255, 0.2);
  transition: 100ms;
}
</style>