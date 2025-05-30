#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  debug() {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }
  if [ -f ~/.huskyrc ]; then
    debug "source ~/.huskyrc"
    . ~/.huskyrc
  fi
  export husky_skip_init=1
  sh -e "$0" "$@"
  exitCode="$?"
  unset husky_skip_init
  exit "$exitCode"
fi
