import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const ballAnimations = {
    displayAnimate: [trigger('display',[
        state('initial',
          style({'font-size': '0px',
                // 'top': '50px',
                // 'left': '50px',
                'height': '0%',
                'width': '0%'})
      ),
        state('final',
          style({
              'font-size': '100%',
              'top': '50px',
              'left': '50px',
              'height': '80%',
                'width': '80%'})
        ),
        transition('initial => final' ,[ animate('1s', 
        keyframes([
          style({
            'font-size': '0px',
                // 'top': '50px',
                // 'left': '50px',
                'height': '0%',
                'width': '0%',
             offset: 0
          }),
          style({
            'font-size': '0px',
                // 'top': '50px',
                // 'left': '50px',
                'height': '0%',
                'width': '0%',
             offset: 0.5
          }),
          style({
            'font-size': '100%',
              'top': '50px',
              'left': '50px',
              'height': '80%',
                'width': '80%',
            offset: 1.0

         })
        ])
        )]
        ),
        transition('final => initial' ,[ animate('.5s')]),
      ])
    ],
    ballAnimate1: [trigger('ball1',[
        state('initial',
          style({})
      ),
        state('final',
          style({'left': '0%',
                  'top': '50%'})
        ),
        transition('initial => final' ,[ animate('.5s', 
        keyframes([
          style({
             offset: 0
          }),
          style({
             'left':'0%',
              offset: 0.5
          }),
          style({
            'left': '0%',
            'top': '50%',
            offset: 1.0

         })
        ])
        )]
        ),
        transition('final => initial' ,[ animate('.5s',
                keyframes([
                style({
                    offset: 0
                }),
                style({
                    'left':'0%',
                    'top': '0%',
                    offset: 0.5
                }),
                style({
                'left': '15%',
                    offset: 1.0
                    })
            ])
        )]),
        
      ])
    ],
    ballAnimate2: [trigger('ball2',[
        state('initial',
          style({})
      ),
        state('final',
          style({'left': '0%',
                  'top': '50%'})
        ),
        transition('initial => final' ,[ animate('.5s', 
        keyframes([
          style({
             offset: 0
          }),
          style({
             'left':'0%',
              offset: 0.5
          }),
          style({
            'left': '0%',
            'top': '50%',
            offset: 1.0

         })
        ])
        )]
        ),
        transition('final => initial' ,[ animate('.5s',
                keyframes([
                style({
                    offset: 0
                }),
                style({
                    'left':'0%',
                    'top': '0%',
                    offset: 0.5
                }),
                style({
                'left': '35%',
                    offset: 1.0
                    })
            ])
        )]),
        
      ])
    ],
    ballAnimate3: [trigger('ball3',[
        state('initial',
          style({})
      ),
        state('final',
          style({'left': '0%',
                  'top': '50%'})
        ),
        transition('initial => final' ,[ animate('.5s', 
        keyframes([
          style({
             offset: 0
          }),
          style({
             'left':'0%',
              offset: 0.5
          }),
          style({
            'left': '0%',
            'top': '50%',
            offset: 1.0

         })
        ])
        )]
        ),
        transition('final => initial' ,[ animate('.5s',
                keyframes([
                style({
                    offset: 0
                }),
                style({
                    'left':'0%',
                    'top': '0%',
                    offset: 0.5
                }),
                style({
                'left': '55%',
                    offset: 1.0
                    })
            ])
        )]),
        
      ])
    ],
    ballAnimate4: [trigger('ball4',[
        state('initial',
          style({})
      ),
        state('final',
          style({'left': '0%',
                  'top': '50%'})
        ),
        transition('initial => final' ,[ animate('.5s', 
        keyframes([
          style({
             offset: 0
          }),
          style({
             'left':'0%',
              offset: 0.5
          }),
          style({
            'left': '0%',
            'top': '50%',
            offset: 1.0

         })
        ])
        )]
        ),
        transition('final => initial' ,[ animate('.5s',
                keyframes([
                style({
                    offset: 0
                }),
                style({
                    'left':'0%',
                    'top': '0%',
                    offset: 0.5
                }),
                style({
                'left': '75%',
                    offset: 1.0
                    })
            ])
        )]),
        
      ])
    ]
    
}