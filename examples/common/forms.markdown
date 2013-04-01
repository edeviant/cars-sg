 - Default layout results in stacked forms, left-aligned labels on top of form controls. 
 - Labels should use sentence case.
 - Controls are set to 100% width, the wrapping grid column controls the width by default.
 - __All Fields Required__ need a label placed at the top stating "All fields are required". Each individual field does not need an asterisk next to it.
 - __Some Fields Required__ need a label at the top stating "*Fields with an asterisks are required". Each required field needs an asterisks next to the form's label. 
 - __Short Forms (2 fields or less)__ don't need to asterisks required feilds. (Example: Sign In form).

```html
<div class="col18">
<form>
	<label>Label name</label>
	<input type="text"/>
	<span class="helper-text"><span>Helper text example</span></span>
	<label>Select</label>
	<div class="select">
		<select>
			<option>Select Make</option>
			<option>Option 1</option>
			<option>Option 2</option>
		</select>
	</div>
	<label>Text area</label>
	<textarea class="expand"></textarea>
	<label><input type="checkbox"/> Checkbox label here</label>
	<input type="submit" value="Submit" />  &nbsp;<a href="">Cancel</a>
</form>
</div>
```

###Form Errors
 - Errors are applied to controls by adding __class="error"__.
 - Forms with more than two fields get an error alert message at the top.
 - The alert message can be general or specific to the form fields depending on the number of fields in error and/or the validations types that did not pass.
 - Micro forms of two fields or less have the option to __not__ display the alert message. 
 - If the alert message become redundant with the inline error messaging the alert message can be dropped from the interface.
 - Helper text should be replaced by the inline-alert text.

```html
<div class="col18">
<form>
	<div class="alert-message error"> <span>Form has errors</span>
		<p>Please fix the errors below.</p>
	</div>
	<label>Error select</label>
	<div class="select error">
		<select>
			<option>Select Make</option>
			<option>Option 1</option>
			<option>Option 2</option>
		</select>
	</div>
	<span class="inline-alert"><span>Please select an option</span></span>
	<label>Error text input</label>
	<input type="text" class="error"/>
	<span class="inline-alert"><span>Helper text gets replaced with inline-alerts</span></span>							
	<label>Error textarea</label>
	<textarea class="expand error"></textarea>
	<span class="inline-alert"><span>Please enter some text</span></span>
	<label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/> Radio button option 1</label>
	<label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/> Radio button option 2</label>	
	<input type="submit" value="Submit" />  &nbsp;<a href="">Cancel</a>									
</form>
</div>
```