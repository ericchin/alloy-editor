(function () {
    'use strict';

    /**
     * The ButtonStrike class styles a selection with strike style.
     *
     * @class ButtonStrike
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     */
    var ButtonStrike = React.createClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @instance
             * @memberof ButtonStrike
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired,

            /**
             * The label that should be used for accessibility purposes.
             *
             * @instance
             * @memberof ButtonStrike
             * @property {String} label
             */
            label: React.PropTypes.string,

            /**
             * The tabIndex of the button in its toolbar current state. A value other than -1
             * means that the button has focus and is the active element.
             *
             * @instance
             * @memberof ButtonStrike
             * @property {Number} tabIndex
             */
            tabIndex: React.PropTypes.number
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @default strike
             * @memberof ButtonStrike
             * @property {String} key
             * @static
             */
            key: 'strike'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @instance
         * @memberof ButtonStrike
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'strike',
                style: 'coreStyles_strike'
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         * @instance
         * @memberof ButtonStrike
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.strike} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-strike" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.strike}>
                    <span className="ae-icon-strike"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonStrike.key] = AlloyEditor.ButtonStrike = ButtonStrike;
}());