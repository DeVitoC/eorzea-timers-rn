import { Pressable, TextInput, View, Text } from 'dripsy';
import { useState } from 'react';
// import Eye from 'app/assets/eye.svg';
// import EyeSlash from 'app/assets/eye-show.svg';
import FormInputBoxProps from 'app/features/components/FormInputBox/types';
// import { SolitoImage } from 'solito/image';

export const FormInputBox: React.FC<FormInputBoxProps> = ({
  value, //required
  placeHolder, // required
  handleBlur,
  autoCapsRule = 'none',
  autoComplete = 'off',
  autoCorrect = true,
  textContentType = 'none',
  keyboardType = 'text',
  secureTextEntry = false,
  errors,
  handleFocus,
  ref,
  autoFocus,
  blurOnSubmit,
  allowFontScaling,
  maxLength,
  multiline = false,
  onContentSizeChange,
  onPressIn,
  placeholderTextColor = 'rgba(255,255,255,0.68)',
  returnKeyType = 'next',
  selectTextOnFocus,
  textAlign,
  maxFontSizeMultiplier = 2,
  keyboardAppearance = 'dark',
  onEndEditing,
}) => {
  const [isSecure, setIsSecure] = useState(!!secureTextEntry);
  const [updatedValue, setUpdatedValue] = useState(value);
  return (
    <View
      sx={{
        borderRadius: 8,
        width: '100%',
        marginTop: 16,
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <View
        sx={{
          backgroundColor: '$mediumGray',
          borderColor: errors ? '$alertRed' : '$transparent',
          borderWidth: 1,
          borderRadius: 8,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <TextInput
          value={updatedValue}
          onChangeText={(text) => setUpdatedValue(text)}
          placeholder={placeHolder}
          autoCapitalize={autoCapsRule}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          textContentType={textContentType}
          inputMode={keyboardType}
          secureTextEntry={isSecure}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref || null}
          autoFocus={autoFocus}
          blurOnSubmit={blurOnSubmit}
          allowFontScaling={allowFontScaling}
          maxLength={maxLength}
          multiline={multiline}
          onContentSizeChange={onContentSizeChange}
          onPressIn={onPressIn}
          placeholderTextColor={placeholderTextColor}
          // returnKeyType={returnKeyType}
          enterKeyHint={returnKeyType}
          selectTextOnFocus={selectTextOnFocus}
          textAlign={textAlign}
          maxFontSizeMultiplier={maxFontSizeMultiplier}
          keyboardAppearance={keyboardAppearance}
          onEndEditing={onEndEditing}
          sx={{
            // fontFamily: 'Poppins-R',
            fontSize: 16,
            color: '$textWhite',
            paddingBottom: 18,
            paddingTop: !!value && value.length !== 0 ? 12 : 18,
            paddingLeft: 18,
            margin: 0,
            width: '100%',
          }}
        />
        <View
          sx={{
            right: 0,
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginEnd: 8,
          }}
        >
          {/* {secureTextEntry &&
            (isSecure ? (
              <Pressable
                onPress={() => {
                  setIsSecure(!isSecure);
                }}
              >
                <SolitoImage
                  src={Eye}
                  height={24}
                  width={24}
                  alt="open eye"
                  resizeMode={'contain'}
                  contentFit={'contain'}
                  onLayout={() => {}}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setIsSecure(!isSecure);
                }}
              >
                <SolitoImage
                  src={EyeSlash}
                  height={24}
                  width={24}
                  alt="closed eye"
                  resizeMode={'contain'}
                  contentFit={'contain'}
                  onLayout={() => {}}
                />
              </Pressable>
            ))} */}
        </View>
      </View>
      {!!updatedValue && updatedValue.length !== 0 && (
        <Text
          sx={{
            color: '$textWhite',
            fontSize: 12,
            // fontFamily: 'Poppins-R',
            position: 'absolute',
            bottom: 4,
            left: 18,
          }}
        >
          {placeHolder}
        </Text>
      )}
      {!!errors && (
        <Text
          sx={{
            fontSize: 12,
            color: 'red',
            paddingVertical: 4,
          }}
        >
          {errors}
        </Text>
      )}
    </View>
  );
};
