import { Ref } from "react";
import { EnterKeyHintType, InputModeOptions, NativeSyntheticEvent, TextInput, TextInputEndEditingEventData, TextInputFocusEventData } from "react-native";

interface FormInputBoxProps {
	value: string;
	placeHolder: string;
	handleBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
	autoCapsRule?: "none" | "sentences" | "words" | "characters";
	autoComplete?: `additional-name` | `address-line1` | `address-line2` | `cc-number` | `country` | `current-password` | `email` | `family-name` | `given-name` | `honorific-prefix` | `honorific-suffix` | `name` | `new-password` | `off` | `one-time-code` | `postal-code` | `street-address` | `tel` | `username`;
	autoCorrect?: boolean;
	textContentType?: 'none' | 'URL' | 'addressCity' | 'addressCityAndState' | 'addressState' | 'countryName' | 'creditCardNumber' | 'emailAddress' | 'familyName' | 'fullStreetAddress' | 'givenName' | 'jobTitle' | 'location' | 'middleName' | 'name' | 'namePrefix' | 'nameSuffix' | 'nickname' | 'organizationName' | 'postalCode' | 'streetAddressLine1' | 'streetAddressLine2' | 'sublocality' | 'telephoneNumber' | 'username' | 'password' | 'newPassword' | 'oneTimeCode' | undefined;
	keyboardType?: InputModeOptions | undefined;
	secureTextEntry?: boolean;
	errors?: String;
	handleFocus?: () => void;
	ref?: Ref<TextInput> | undefined;
	autoFocus?: boolean | undefined;
	blurOnSubmit?: boolean | undefined;
	allowFontScaling?: boolean | undefined;
	maxLength?: number | undefined;
	multiline?: boolean | undefined;
	onContentSizeChange?: () => void;
	onPressIn?: () => void;
	placeholderTextColor?: string | undefined;
	returnKeyType?: EnterKeyHintType | undefined;
	selectTextOnFocus?: boolean | undefined;
	textAlign?: 'left' | 'center' | 'right' | undefined;
	maxFontSizeMultiplier?: number | null | undefined;
	keyboardAppearance?: 'dark' | 'light' | undefined;
	onEndEditing?: ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void) | undefined;
  }

 export default FormInputBoxProps