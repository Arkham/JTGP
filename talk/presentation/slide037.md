          ________    _
         /_  __/ /_  (_)____
          / / / __ \/ / ___/
         / / / / / / (__  )
        /_/ /_/ /_/_/____/

        var matz = makePerson('Yukihiro', 'Matsumoto');

        matz.fullName()
        // 'Yukihiro Matsumoto'

        var matzName = matz.fullName;

        matzName()
        // 'undefined undefined'

        matzName.apply(matz)
        // 'Yukihiro Matsumoto'
















































































slide 037
