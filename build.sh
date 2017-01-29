KEY=~/workspace/vsonline/Keys/coisadeprogramador.keystore
APK=platforms/android/build/outputs/apk/android-release-unsigned.apk
OUTPUT=whats-size.apk

rm $OUTPUT
cp -Rf res/* platforms/android/res/
cordova build --release android
jarsigner -tsa http://timestamp.digicert.com -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $KEY $APK alias_name
zipalign -v 4 $APK $OUTPUT
rm "platforms/android/build/outputs/apk/android-release-unsigned.apk"