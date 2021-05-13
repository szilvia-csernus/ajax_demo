class ChatMachine  {
    
    constructor($el) {
        this.$messages = $el.find("ul");
        this.$form = $el.find("form");
        this.$form.on("submit", this.submitMessage.bind(this));
    }

    submitMessage(event) {
        event.preventDefault();
        $.ajax({
            method: "POST",
            url: "/messages",
            dataType: "json",
            data: this.$form.serialize(),
            success: function (message) {
                this.addMessage(message);
                this.clearForm();
            }.bind(this)
        });
        this.addSpinner();
    }

    addMessage(message) {
        const $message = $("<li>").text(message.author + ": " + message.text);
        this.$messages.append($message);
        this.$messages.find(".loader").remove();
    }

    clearForm() {
        this.$form.find("input[type='text']").val("");
    }

    addSpinner() {
        this.$messages.append('<div class="loader">Loading...</div>');
    }
    
};


module.exports = ChatMachine;
